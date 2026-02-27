cd $PSScriptRoot

$time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

git add .

git commit -m "auto: work snapshot $time"
