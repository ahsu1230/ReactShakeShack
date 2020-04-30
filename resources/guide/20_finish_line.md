# Congratulations - You're Done!

Congratulations on finishing this tutorial! From here, feel free to upload this project to your own Github repository. To do so, you can follow the directions [here](./20a_git_add_own_repo.md). Once you're done, feel free to PM me the URL of your repository!

In addition, you may take the time to dive into extra ReactJS / SASS tricks that will definitely improve your front-end development. Or, you may take the time to polish this application by solving this list of known bugs.

## Extras

- [CSS Flexbox](./extras/css_flexbox.md) - An easier way to position elements with CSS
- [CSS Modules](./extras/css_modules.md) - Removing CSS global scoping

## Known Bugs

The guide was only meant to teach you the fundamentals of ReactJS development. But there are still a few known bugs here and there.

### Saving the OrderCounter

As you add orders, the OrderCounter increases by value. But when you refresh the page, and try adding another order, the order starts back at 0, which could cause some problems because we now have orders with the same ID. To fix this, we need to also save the OrderCounter to local storage.
