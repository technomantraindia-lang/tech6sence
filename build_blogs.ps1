$txt = Get-Content -Path "extracted_blogs.txt" -Raw -Encoding utf8
$lines = $txt.Split("`n") | ForEach-Object { $_.Trim() } | Where-Object { $_.Length -gt 0 }

$meta = @(
    @{ 
        id = 1; 
        title = "What Is an AI Development Company -- And How Do You Choose the Right One?"; 
        slug = "what-is-an-ai-development-company"; 
        category = "AI Development"; 
        image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"; 
        date = "August 24, 2026" 
    },
    @{ 
        id = 2; 
        title = "Intelligent Solutions: The Future of AI-Powered Business Transformation"; 
        slug = "intelligent-solutions-future-of-ai"; 
        category = "Intelligent Solutions"; 
        image = "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80"; 
        date = "August 20, 2026" 
    },
    @{ 
        id = 3; 
        title = "Deep-Tech Product Ecosystem: Building Tomorrow's Intelligent Technologies"; 
        slug = "deep-tech-product-ecosystem"; 
        category = "Deep-Tech Products"; 
        image = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"; 
        date = "August 15, 2026" 
    },
    @{ 
        id = 4; 
        title = "Visionary Founders Ecosystem: Building Global AI Companies from Day One"; 
        slug = "visionary-founders-ecosystem"; 
        category = "Visionary Founders"; 
        image = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"; 
        date = "August 10, 2026" 
    },
    @{ 
        id = 5; 
        title = "Business Brains Circle: Where Global Leaders Shape the Future"; 
        slug = "business-brains-circle"; 
        category = "Business Brains"; 
        image = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"; 
        date = "August 05, 2026" 
    },
    @{ 
        id = 6; 
        title = "Industries Impact: How Artificial Intelligence Is Transforming Every Sector"; 
        slug = "industries-impact-ai-transformation"; 
        category = "Industries Impact"; 
        image = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"; 
        date = "August 01, 2026" 
    }
)

$targetTitles = @(
    "What Is an AI Development Company",
    "Intelligent Solutions: The Future of AI-Powered Business Transformation",
    "Deep-Tech Product Ecosystem: Building Tomorrow",
    "Visionary Founders Ecosystem: Building Global AI Companies from Day One",
    "Business Brains Circle: Where Global Leaders Shape the Future",
    "Industries Impact: How Artificial Intelligence Is Transforming Every Sector"
)

$indices = @()
for ($mIdx = 0; $mIdx -lt $meta.Count; $mIdx++) {
    $m = $meta[$mIdx]
    $tSub = $targetTitles[$mIdx]
    $foundIdx = -1
    for ($lIdx = 12; $lIdx -lt $lines.Count; $lIdx++) {
        if ($lines[$lIdx].StartsWith($tSub)) {
            $foundIdx = $lIdx
            break
        }
    }
    $indices += @{ meta = $m; lineIdx = $foundIdx }
}

$blogsList = @()
for ($i = 0; $i -lt $indices.Count; $i++) {
    $curr = $indices[$i]
    $start = $curr.lineIdx
    if ($i -lt $indices.Count - 1) {
        $end = $indices[$i+1].lineIdx - 1
    } else {
        $end = $lines.Count - 1
    }
    
    $article = $lines[$start..$end]
    $excerptText = ($article[1..5] -join " ")
    if ($excerptText.Length -gt 260) {
        $excerptText = $excerptText.Substring(0, 260) + "..."
    }
    
    $wordCount = ($article -join " ").Split(" ").Count
    $readMin = [math]::Ceiling($wordCount / 200)

    $blogsList += @{
        id = $curr.meta.id
        title = $curr.meta.title
        slug = $curr.meta.slug
        category = $curr.meta.category
        date = $curr.meta.date
        author = "TECH6SENSE AI Team"
        readTime = "$readMin min read"
        image = $curr.meta.image
        excerpt = $excerptText
        content = $article
    }
}

$json = $blogsList | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText("src/data/blogs.json", $json, [System.Text.Encoding]::UTF8)
Write-Host "Successfully generated src/data/blogs.json with $($blogsList.Count) articles!"
