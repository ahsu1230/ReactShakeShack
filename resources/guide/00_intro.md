# Guide Introduction

Welcome! Today we will create our first React web application. It will be an Order List manager app for the American burger chain Shake Shack (not actually though).

The functionalities of this app are simple:

- Allow an employee to view all current orders
- Allow an employee to add an order
- Allow an employee to delete an order
- If an employee has too many orders, there is a link they can click on to quit their job!
- If the employee regrets quitting, they may come back and resume working lol.

For reference, here is a screenshot of the final application:
Here's the screenshot of the order managing web-tool.
![Screenshot_Final_Home](../images/screenshot_final_home.png)

Here's the screenshot of the webpage to notify that you've successfully quit your job!
![Screenshot_Final_Quit](../images/screenshot_final_quit.png)

## Getting Started (recommended IDE)

When working in React, I recommend using VSCode (https://code.visualstudio.com/).
It's an IDE that can be used for many different languages, but it has additional extensions that can help you with your React coding.

Download and install VSCode. Once VSCode is installed, open it and search for the following Extensions to install:

- "ES7 React" by `dsznajder`
- "Prettier" - keeps your Javascript looking nice
- "Beautify" - keeps your CSS/SASS looking nice

## Getting Started (installing Node and starting your web application)

You will first need to install [nodeJS and npm](https://www.npmjs.com/get-npm).
You can confirm things have successfully installed by running the following in Terminal/Command Prompt:

```
node -v
npm -v
```

Using Terminal (Mac) or Command Prompt (Windows), traverse to the root directory (same directory as `index.html`) and run:

```
npm install
```

If there are no errors, let's run our web application! In the root directory, run:

```
npm run build
npm run start
```

You should see a `Server running at http://localhost:8080` or something similar.
Open a browser (like Chrome) and go to that url link (http://localhost:8080). You should see what your starting application renders!

## Project Directory

I've given you starting code. You should see an `index.html` and a `components` folder. All of your work should happen inside the contents of the `components` folder. Let's get started!

To move on to the first task, click [here](./01_prerequisites.md).
