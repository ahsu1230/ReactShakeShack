# React with ShakeShack
A very basic guide to working with ReactJs and Stylus.
 - ReactJs is a popular web framework created by Facebook (https://reactjs.org/)
 - Stylus is a CSS pre-processor (https://stylus-lang.com/)

## Objective
Today, you will be creating an order management system at your favorite fast food chain Shake Shack Burgers!
In this exercise, you will learn the following concepts:
 - HTML DOM & CSS Basics
 - CSS Selectors
 - Using `<button>` and `onClick`
 - Using `<input>` and `onChange`
 - Using React `<Link>`
 - React component lifecycles
 - React `states`
 - React parent-children relationships
 - Creating lists (`<ul>` & `<li>`)
 - React `props`
 - Callback functions
 - Inserting images
 - Asynchronous function calls
 - Cookies & LocalStorage

## Getting Started
You will first need to install [nodeJS and npm](https://www.npmjs.com/get-npm).

Traverse to the root directory (same directory as `index.html`).
```
npm install
```
If there are no errors, you should see a 'Built in: xx ms.'
You should see a `Server running at http://localhost:1234`
So in a browser (like Chrome), go to http://localhost:1234.

In your index.html, look for the following line:
```
<script src="./<THIS>/main.js"></script>
```
Make sure `<THIS>` is `components_starter`.
If you would like to see what the final app should look like, replace `<THIS>` with `components_answer`.

## Project Guide
To get your project working, you can start the guide [here](./resources/00_intro_guide.md).

## HTML DOM & CSS Basics
##### HTML
 - Hypertext Markup Language 
 - The most basic building block of the Web. It defines the meaning and structure of web content. It defines where things are and what they are. 
 - A simple HTML Document will have 
   - The `<!DOCTYPE html>` declaration defines this document to be HTML5
   - The `<html>` element is the root element of an HTML page
   - The `<head>` element contains meta information about the document
   - The `<title>` element specifies a title for the document
   - The `<body>` element contains the visible page content
   - The `<h1>` element defines a large heading
   - The `<p>` element defines a paragraph
   - ```
     <!DOCTYPE html>
     <html>
      <head>
       <title>Page Title</title>
      </head>
      <body>
       <h1>My First Heading</h1>
       <p>My first paragraph.</p>
      </body>
     </html>
     ```
 
##### DOM
 - Direct Object Model
 - DOM is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
 - An example of a DOM and Javascript Document could look like this:
   - ```
     <html>
      <head>
       <script>
        window.onload = function() {
         const heading = document.createElement("h1");
         const heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
        }
       </script>
      </head>
      <body>
      </body>
     </html>
     ```
 
##### CSS
 - Cascading Style Sheet
 - CSS describes how HTML elements should be displayed. CSS describes how things look. 
 - An example of a CSS document could look like this:
   - ```
     <!DOCTYPE html>
     <html>
      <head>
       <style>
        body {
         background-color: lightblue;
        }
        h1 {
         color: white;
         text-align: center;
        }
        p {
         font-family: verdana;
         font-size: 20px;
        }
       </style>
      </head>
      <body>
       <h1>My First CSS Example</h1>
       <p>This is a paragraph.</p>
      </body>
     </html>
     ```

##### EXCEPTION
 - Positioning is shared among HTML and CSS. 

## CSS Selectors 
 - CSS selectors are used to "find" (or select) the HTML elements you want to style
 - Types of CSS Selectors
   - Simple selectors (select elements based on name, id, class)
   - Combinator selectors (select elements based on a specific relationship between them)
     - A combinator is something that explains the relationship between the selectors

