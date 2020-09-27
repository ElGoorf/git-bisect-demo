# `git bisect` Demo: Basic Example
An intro to my favourite, but apparently not so well-known, tool.

## The Bug
There's been a mix-up and this article is showing the wrong image! This seems to have gone unnoticed for a while, as the last few changes all seem to feature that same image. You've been tasked with rolling back in time to find the most recent image of a squirrel without loosing any of the more recent valid changes.

## This step
**NB: With each step, refresh index.html and check back on this README file! If you get lost, you can return to the start by entering `git bisect reset`**

With public/index.html open in your favourite browser, you can immediately see: that's a cow, not a squirrel!

Looking back at the git history, you clearly remember git commit _3f43864_ being a change you made, and the correct image was definitely showing at the time. We want to find when, since that commit, that wrong image was introduced. 

Firstly, enter `git bisect start`, and then enter `git bisect good 3f43864`. This wakes-up the git bisect tool and tells it the that _3f43864_ is the last-known good commit.

We know the current commit is bad, so we could (but please don't!) enter `git bisect bad` to state that the current revision is bad. Fortunately, a colleague tells you that the previous commit _557949d_ is also bad, so we can give ourselves a head-start by specifying the earliest known bad revision number. Enter `git bisect bad 557949d`.

Go ahead. Remember to check back on this README after completing each step, as the instructions will update.
