# `git-bisect` Interactive Tutorial - Part 2: Automation with Testing

Git Bisect can be automated by connecting it to a test runner. If you're unfamiliar with how automated testing works, then don't panic, you might be about to learn two things in one tutorial!

In this example, a function (`twelve()`) should always return the number `12` but at some point it started throwing other numbers. 

We can see the output of `twelve()` in console when we run `yarn start`, so could check the output with every iteration of a `git bisect`. However, with so many revisions, it might take a while to find the offending commit. We can speed this up by creating an automated test.

In `test/numbers.test.js`, I've created a test function for you. In case you aren't familiar with how testing works, this test function runs `twelve()` and asserts that it returns 12, outputting the results in your console. In our case, it will also tell `git bisect` the result of the test.

Uncomment the test function, and then enter the following commends which you should be familiar with from the previous tutorial:

```
git bisect start
git bisect bad
git bisect good fb3b981
```

Now git bisect should be ready to go, but rather than manually entering `git bisect [good/bad]`, we'll make it run automatically with our test runner:

`git bisect run yarn test`

In a flash, you will see the results of the test runner appear in the console with each pass, until the offending commit is found.
