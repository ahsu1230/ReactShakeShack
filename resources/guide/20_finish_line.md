# Congratulations - You're Done!

Congratulations on finishing this tutorial! From here, feel free to upload this project to your own Github repository.

Here's how you can do that. You'll have to:

- Remove your current origin
- Setup a new origin pointing to your repository
- Commit and push your work to that repository.

Follow the steps in your Terminal / Command Prompt in the root folder of your local ReactShakeShack directory.

1. Check your current remote

```
git remote -v
```
You should see two entries, both pointing to `https://github.com/ahsu1230/ReactForNoobs.git`

2. Remove the current remote

```
git remote rm origin
```

3. On the Github website, create a new repository under your account. You may name the repository whatever you like (i.e. ReactShakeShackTutorial).

Once the repository is created, you should be able to retrieve a url that looks like:
`https://github.com/your_username/ReactShakeShackTutorial.git`
**Copy this url!**

4. Add this personal remote in your Terminal/Command. Of course, be sure to replace the username and project name appropriately.

```
git remote add origin your_username/ReactShakeShackTutorial
```

5. Check if things worked!

```
give remote -v
```
Should show you two entries, both pointing to your url.

Once you're done, feel free to PM me the URL of your repository! And feel free to dive into the extras folder to learn a few more ReactJs tricks!

I recommend doing the extra challenges in the following order:

- [CSS Flexbox](./extras/css_flexbox.md) - An easier way to position elements with CSS
- [CSS Modules](./extras/css_modules.md) - Removing CSS global scoping