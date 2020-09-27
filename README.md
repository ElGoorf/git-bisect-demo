# `git bisect` Demo: Basic Example
An intro to my favourite, but apparently not so well-known, tool.

## The Bug
There's been a mix-up and this article is showing the wrong image! This seems to have gone unnoticed for a while, as the last few changes all seem to feature that same image. You've been tasked with rolling back in time to find the most recent image of a squirrel without loosing any of the more recent valid changes.

## This step
You can immediately see, that's a cow, not a squirrel!

Looking back at the git history, you clearly remember git commit _3f43864_ being a change you made, and the correct image was definitely showing at the time. Enter `git bisect good 3f43864`.

We can see the current commit is bad, so enter `git bisect bad`. By not entering a revision, the command will assume the currently checked-out commit.

A colleague tells you that the previous commit _557949d_ is also bad, so you could also enter `git bisect bad 557949d` to give yourself a bit of a head-start, if you trust them!

Now we've established as last-known good commit and first-known bad commit, we can begin to bisect. With each step, refresh the page, and check back on this README for updated tips and instructions. Enter `git bisect start`!
