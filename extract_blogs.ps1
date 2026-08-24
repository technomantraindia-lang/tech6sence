Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("Final Blogs.docx")
$entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$xml = [xml]$xmlText
$nodes = $xml.getElementsByTagName("w:p")
$sb = New-Object System.Text.StringBuilder
foreach ($n in $nodes) {
    $t = ($n.getElementsByTagName("w:t") | ForEach-Object { $_.InnerText }) -join ""
    if ($t.Trim().Length -gt 0) {
        [void]$sb.AppendLine($t)
    }
}
[System.IO.File]::WriteAllText("extracted_blogs.txt", $sb.ToString())
Write-Host "Extracted blogs text successfully!"
