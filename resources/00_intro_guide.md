# Introduction

Welcome! Today we will create our first React web application. It will be an Order List manager app for the American burger chain Shake Shack (not actually though).

The functionalities of this app are simple:
 - Allow an employee to view all current orders
 - Allow an employee to add an order
 - Allow an employee to delete an order
 - If an employee has too many orders, there is a link they can click on to quit their job!
 - If the employee regrets quitting, they may come back and resume working lol.

For reference, here is a screenshot of the final application:
Here's the screenshot of the order managing web-tool.
![Screenshot_Final_Home](images/screenshot_final_home.png)

Here's the screenshot of the webpage to notify that you've successfully quit your job!
![Screenshot_Final_Quit](images/screenshot_final_quit.png)

## Project Directory
I've given you starting code. Your current `index.html` should be linked to the contents in folder `components_starter`.
Inside `index.html`, you should see the following line:
```
<script src="./components_starter/main.js"></script>
```
If at any time you would like to see how the application correctly behaves, replace `components_starter` with `components_answer`.

## Some Good-To-Knows
If you haven't already:
 - You will first need to install [nodeJS and npm](https://www.npmjs.com/get-npm).
 - Verify your installing by running `npm -v` in Terminal / Command Prompt.
 - Run this following command at this repo's root directory:
```
npm install
```

To run your web application, run the following command in Terminal at the root directory:
```
parcel run index.html
```
You should see a "Server running at http://localhost:1234" or something similar.
Open a browser and go to that link.
You should see what your starting application renders!

To move on to the first task, click [here]().
