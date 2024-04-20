$scriptWerkRemote   = "origin"
$myRemote           = "internal"

$currBranch = git rev-parse --abbrev-ref HEAD
git pull --all
$remotes = git branch -r

foreach($remote in $remotes) {
    $remote = $remote.TrimStart()
    $splittedBranch = $remote -split "/"

    if ($splittedBranch[0] -eq $scriptWerkRemote) {
        git checkout $splittedBranch[1]
        git pull
    }

    Write-Output $remote
}

git checkout $currBranch
git push $myRemote --all