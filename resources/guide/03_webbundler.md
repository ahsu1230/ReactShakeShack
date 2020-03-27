# Web Bundlers

One more thing before we start with our exercises.

This whole application is created by a tool called web bundlers.
Web bundlers are scripts that "bundle" your website-related files into a fully-functional website.

With modern tools like ReactJs and SASS, your website files by themselves won't actually work. They need to first be converted into "pure" Javascript, HTML, and CSS. To do this, web bundlers collect all your React and SASS files, automatically convert them into CSS files, and optimize them to take as little space as possible to finally create few Javascript and CSS files for your web application.

## Webpack
Webpack (https://webpack.js.org/) is a type of web bundler.
It has additional features of providing developers an easy way to develop their websites.

With Webpack, you can run your web application locally!
In your Terminal / Command Prompt in the root folder, run:
```
parcel index.html
```
You should see a "Server running at http://localhost:1234" or something similar.
Open a browser (like Chrome) and go to that url link. You should see what your starting application renders!

While Webpack is running, it can also detect changes in Javascript / SASS / etc. files in your directory to then automatically re-render your website. So if you make any changes to a file, you should immediately see the change in the browser!

Sometimes it bugs out though, so if you don't see immediate changes, please use `CTRL + C` to cancel out of webpack in Terminal / Command Prompt.
Then restart Webpack again with the command above.

[Click here to continue](./04_header_sass.md)
