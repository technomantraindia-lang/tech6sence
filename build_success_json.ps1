$txt = Get-Content -Path "extracted_success_stories.txt" -Raw -Encoding utf8
$lines = $txt.Split("`n") | ForEach-Object { $_.Trim() } | Where-Object { $_.Length -gt 0 }

# Find lines starting with "Success Story "
$storyStartIndices = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i].StartsWith("Success Story ")) {
        $storyStartIndices += $i
    }
}

$stories = @()

for ($s = 0; $s -lt $storyStartIndices.Count; $s++) {
    $start = $storyStartIndices[$s]
    if ($s -lt $storyStartIndices.Count - 1) {
        $end = $storyStartIndices[$s+1] - 1
    } else {
        $end = [array]::IndexOf($lines, "Ready to Build Your AI Success Story?") - 1
        if ($end -lt 0) { $end = $lines.Count - 1 }
    }

    $block = $lines[$start..$end]
    
    # Story Number & Location/Industry
    $headerLine = $block[0]
    $locIndLine = $block[1]
    $titleLine = $block[2]
    
    $locParts = $locIndLine.Split("|")
    $location = $locParts[0].Trim()
    $industry = if ($locParts.Count -gt 1) { $locParts[1].Trim() } else { "Enterprise AI" }

    # Extract Tech Stack
    $techStack = @()
    $techStart = [array]::IndexOf($block, "Technology Stack:")
    if ($techStart -lt 0) { $techStart = [array]::IndexOf($block, "Technology Stack") }
    $execStart = [array]::IndexOf($block, "Executive Summary")
    
    if ($techStart -ge 0 -and $execStart -gt $techStart) {
        for ($t = $techStart + 1; $t -lt $execStart; $t++) {
            if ($block[$t].Length -gt 0) {
                $techStack += $block[$t]
            }
        }
    }

    # Executive Summary
    $summary = ""
    $chalStart = [array]::IndexOf($block, "Business Challenges")
    if ($execStart -ge 0 -and $chalStart -gt $execStart) {
        $summary = ($block[($execStart+1)..($chalStart-1)] -join " ")
    }

    # Testimonial
    $testStart = [array]::IndexOf($block, "Client Testimonial")
    $testimonialQuote = ""
    $testimonialAuthor = ""
    if ($testStart -ge 0 -and $testStart -lt $block.Count - 1) {
        $qLine = $block[$testStart + 1]
        $aLine = if ($testStart + 2 -lt $block.Count) { $block[$testStart + 2] } else { "" }
        
        $testimonialQuote = $qLine.Trim('"').Trim()
        $testimonialAuthor = $aLine.Trim()
    }

    # Metrics / Business Impact
    $impactStart = [array]::IndexOf($block, "Business Impact")
    if ($impactStart -lt 0) { $impactStart = [array]::IndexOf($block, "Business Outcomes") }
    if ($impactStart -lt 0) { $impactStart = [array]::IndexOf($block, "Business Results") }
    
    $metrics = @()
    if ($impactStart -ge 0) {
        $limit = if ($testStart -gt $impactStart) { $testStart - 1 } else { $block.Count - 1 }
        for ($m = $impactStart + 1; $m -le $limit; $m++) {
            $curr = $block[$m]
            if ($curr -match "^(\d+[\%\+]?|\d+/\d+|Enterprise|Personalized|Improved|Higher|Faster)") {
                $val = $curr
                $desc = if ($m + 1 -le $limit) { $block[$m+1] } else { "" }
                if ($desc -notmatch "^(\d+[\%\+]?|\d+/\d+|Enterprise|Personalized|Improved|Higher|Faster)") {
                    $metrics += @{ value = $val; label = $desc }
                    $m++
                } else {
                    $metrics += @{ value = $val; label = "" }
                }
            }
        }
    }

    $stories += @{
        id = "story-" + ($s + 1)
        number = "Success Story " + ("{0:D2}" -f ($s + 1))
        title = $titleLine
        industry = $industry
        location = $location
        techStack = $techStack
        summary = $summary
        metrics = $metrics
        testimonial = @{
            quote = $testimonialQuote
            author = $testimonialAuthor
        }
        fullContent = $block
    }
}

$json = $stories | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText("src/data/successStoriesParsed.json", $json, [System.Text.Encoding]::UTF8)
Write-Host "Successfully parsed $($stories.Count) success stories with clean quotes and separate single-line client author names!"
