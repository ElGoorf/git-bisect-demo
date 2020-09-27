# `git bisect` Demo: Basic Example
An intro to my favourite, but apparently not so well-known, tool.

## The Bug
There's been a mix-up and this article is showing the wrong image! This seems to have gone unnoticed for a while, as the last few changes all seem to feature that same image. You've been tasked with rolling back in time to find the most recent image of a squirrel without loosing any of the more recent valid changes.

## This step
Uh-oh! That's a handsome, but clearly not a squirrel! 

Enter `git bisect bad` to proceed. This will mark this commit as bad, and rollback to the commit halfway between here and the most recent good commit.
