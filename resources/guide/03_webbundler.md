# Running Your Project with Web Bundlers

One more thing before we start with our exercises. We want to first learn how to run your application.

This whole application is created by a tool called *web bundlers*. Web bundlers are scripts that "bundle" your website-related files into a fully-functional website.

With modern tools like ReactJs and SASS, your website files by themselves won't actually work. They need to first be converted into "pure" Javascript, HTML, and CSS. To do this, web bundlers collect all your React and SASS files, automatically convert them into CSS files, and optimize them to take as little space as possible to finally create few Javascript and CSS files for your web application.

## Webpack

Webpack (https://webpack.js.org/) is a type of web bundler.
It has additional features of providing developers an easy way to develop their websites.

With Webpack, you can run your web application locally!
In your Terminal / Command Prompt in the root folder, run:

```
npm run build
npm run start
```

You should see a `Server running at http://localhost:8080` or something similar.
Open a browser (like Chrome) and go to that url link. You should see what your starting application renders!

While Webpack is running, it can also detect changes in Javascript / SASS / etc. files in your directory to then automatically re-render your website. So if you make any changes to a file, you should immediately see the change in the browser!

Sometimes it bugs out though, so if you don't see immediate changes, please use `CTRL + C` to cancel out of webpack in Terminal / Command Prompt.
Then restart Webpack again with the `npm run start` command.

## Package.json

Package.json is a file that describes what "packages", "libraries", and where external sources are coming from. It is handled by Node (npm). If you take a look at the `package.json` file, you should see two notable things:

- Under `scripts`, there are several options.
  - Two of which you just used `npm run build` and `npm run start`. Notice how both of these commands call webpack related things.
  - You should notice another option called `prettify`. These are all custom options so you can define them however you'd like. With this option, if you want to make your code "prettier" and consistently indented, run `npm run prettify` which will call the `Prettier` library and reformat all Javascript code files in your current directory!
- Under `dependencies` and `devDependencies`, you should see a list of external libraries that we use in order to get our whole project to work.

- You should notice that `webpack`, `react`, and `sass` are all part of this dependency list.

You don't have to do anything here, I just wanted to describe to you how everything is linked together. If you ever want to create your own React project, this is where to start!

[Click here to continue](./04_header_sass.md)
