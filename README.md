# Git-bisect Demo
An intro to my favourite, but apparently not so well-known, tool.

## Summary
`git-bisect` comes in handy when you have a bug but can't find the point in your change history when the bug came into existence. This command will help you find the exact commit to investigate.

I will demonstrate this with a few demos, each one on a different branch. These demos are interactive so please feel free to clone them locally and follow the instructions in the README.md of each branch. If you want to get started, then dive right in, else read on below for more information.

## Why?
We've all been there. You're casually playing through your app or website, and notice something isn't quite right. Upon closer inspection, a bug has crept into your code, but in reviewing your recent edits, there doesn't seem to be any obvious cause. You consider injecting break-points and heaven-forbid, `console.log()`s, but not even sure where to begin. Well, there's one thing for it. Undo all your changes until the bug goes away, which means undoing hours of legitimate, perfectly good code for your latest feature, and possibly making a big mess of that too. **There is an easier way**: `git-bisect`!

I'm always surprised how little-known this command is, even by fellow senior developers, but it always brings me great pleasure to introduce them, because I know from experience how much happier they'll be with the command in their repertoire.

## What does it do?
It's quite simple. You tell the command the last-known commit for which the bug doesn't appear ("good"), and tell it the earliest-known commit for when the bug first appears ("bad"). The command will then checkout a commit half-way inbetween the good and bad. Run the code, and say if the current checkout is "good" or "bad". The command will recursively checkout the half-way commit between the last bad and the first good, until it narrows down on the commit for which the bug first appears.

## What will I demonstrate?
I will set up 3 scenarios demonstrating the basic and advanced features of `git-bisect`. This is an interactive demo, so please feel free to clone the repo locally. I shall create a different branch for each demo. Now please excuse the strange scenarios which I'm about to present. `Git-bisect`'s usefulness is best demonstrated with really complicated bugs, but I want to keep the examples simple and accessible. Therefore I'm making simple examples, hoping that when the time comes to use `git-bisect` in the real world, you'll be able to take what you'll learnt here and apply it there.

### 1. Basic intro
This demo will show a simple static html page, but for some reason the main image doesn't fit correctly in its container. You can see the image is base-64 encoded and has been changed a few times. Until the design team can supply a new image, you've been tasked with reverting back to the most recent 
