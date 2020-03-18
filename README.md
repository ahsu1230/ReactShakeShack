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
```
<!DOCTYPE html>
<html>
    <body>
        <h1>My First CSS Example</h1>
        <p>This is a paragraph.</p>
     </body>
</html>
```

##### CSS
 - Cascading Style Sheet
 - CSS describes how HTML elements should be displayed. CSS describes how things look. 
 - An example of a CSS document could look like this:
```
body {
    background-color: lightblue
}
h1 {
    color: white;
    text-align: center;
}
p {
    font-family: verdana;
    font-size: 20px;
}
```

##### EXCEPTION
 - Positioning is shared among HTML and CSS. 

## CSS Selectors 
 - CSS selectors are used to "find" (or select) the HTML elements you want to style
 - Types of CSS Selectors
   - Simple selectors (select elements based on name, id, class)
   - Combinator selectors (select elements based on a specific relationship between them)
     - A combinator is something that explains the relationship between the selectors

## Using React `function`
 - To make functions you need two things to define a function
   - First
     - Create your function names inside the constructor() using this format 
     - ```
       export class Page extends React.Component {
        constructor(){
         this.functionName = this.functionName.bind(this);
        }
       ```
   - Second
     - You create your function inside this the whole React.Component Scope
     - ```
       functionName() {
        console.log("Text");
        let newOrder = {
            variable: this.state.input,
            variable2: this.state.input2
        };
        ```
     
## Using `<button>` and `onClick` 
 - button creates a element that can be pressed
 - the onClick event occurs when the user clicks on a button  
 - Example:
   - ```
     buttonName = (<button onClick={function}>Text</button>);
     ```
     - The function here is defined in the constructor that we mentioned at the top
   - ```
     deleteButton = (<button onClick={this.handleClickDelete}>Delete Order</button>);
     ```
     
## Using `<input>` and `onChange`
 - input is what the user wants to change 
 - onChange attribute fires the moment when the value of the element is changed
 - Example:
   - ```
     let newFood = event.target.value;
      console.log("Changed food " + newFood);
      this.setState({
       inputOrderFood: newFood
      });
     ```

## Using React `<Link>`
 - Links are buttons that you can jump to other documents when pressed 
 - Example:
   - To another website (absolute path)
   - ```
     <Link to="www.google.com">Link to Google</Link>
     ```
   - To another page on this website (relative path)
   - ```
     <Link to="/quit">Quit Now</Link>
     ```
 
## React component lifecycles
 - Every React.Component class has several "lifecycle methods" that you can override to run code at particular times in the process. 
 - Every time a variable changes the "render" function gets called 
 - Every React.component has one render function
 - Every render function returns an HTML
 - You can only return one HTML element 
 - Example: 
   - ```
     class Welcome extends React.Component {
       render() {
        return <h1>Hello, {this.props.name}</h1>;
       }
     }
     
 
## React `states` 
 - the state object is where you store property values that belongs to the component
 - Example:
   - ```
     class Car extends React.Component {
      constructor(props) {
       super(props);
       this.state = {brand: "Toyota"};
      }
      render() {
       return (
        <div>
         <h1>My Car</h1>
        </div>
       );
      }
     }
     ```

## React parent-children relationships
 - If a parent component wants to feed data to a child compenent, it simply pasess it via props.
 - Example:
   - In this example, BookList component contains data for a list of books. The Book component can receive and use those fields contained in the props parameter to its function.
   - ```
     function BookList() {
      const list = [
       { title: 'A Christmas Carol', author: 'Charles Dickens' },
       { title: 'The Mansion', author: 'Henry Van Dyke' },
      ]
      return (
       <ul>
        {list.map((book, i) => <Book title={book.title} author={book.author} key={i} />)}
       </ul>
      )
     }

     function Book(props) {
      return (
       <li>
        <h2>{props.title</h2>
        <div>{props.author}</div>
       </li>
      )
     }
     ```
     
## Creating lists (`<ul>` & `<li>`)
 - ul = unordered list 
 - li = each list item
 - As seen in the parent-children relationships, ul is used for unordered lists and li are used for the list items inside that list.
 
Example with HTML:
```
<h1>My Favorite Foods</h1>
<ul>
    <li>Fried Chicken</li>
    <li>Sushi</li>
    <li>Carne Asada Tacos</li>
</ul>
```

Example with React: 

You can use `.map(...)` to apply a function to a list of elements.
The `map` function is often used to change the elements in a list (like a "mapping" of sorts). Essentially, you are iterating over all the elements in the list and creating a new value. In this case, we are taking a list of objects (book information with title and author) and creating a new list of `<li>` elements. Each `<li>` element has the book title and author.
This new list is called `listItems` which we then insert into the resulting HTML.
```
render() {
    const list = [
        { title: 'A Christmas Carol', author: 'Charles Dickens' },
        { title: 'The Mansion', author: 'Henry Van Dyke' },
    ];
    const listItems = list.map((book, i) => <li key={i}>{book.title} by {book.author}</li>);

    return (
        <ul>
            {listItems}
        </ul>
    );
}
```
 
## React `props`
 - Props are arguments passed into React components
 - If a Component receives arguments, you can access those variables using `props`.
 
Example: This is a Book component that receives 2 values as arguments. A `title` and an `author`.
To access them, we can simply use `props.title` and `props.author`.
```
class Book extends React.Component {
    render() {
        return (
            <li>
                <h2>{props.title}</h2>
                <div>{props.author}</div>
                ...
            </li>
        );
    }
}
```

To pass arguments, you could simply do something like this:
```
<Book title="The Mansion" author="Henry Van Dyke"/>
```
And this will render a Book component with the respective values.

To take this a step further, this is often useful when you have parent-child relationships between React Components.
For example, let's say we had a parent component, BookList, render a list of Books.
Inside the `render()` function of the parent, BookList, you could have it render a list of `<Book>`s
```
class BookList extends React.Component {
    render() {
        const list = [
            { title: 'A Christmas Carol', author: 'Charles Dickens' },
            { title: 'The Mansion', author: 'Henry Van Dyke' },
        ];
        const listItems = list.map((book, i) => <Book key={i} title={book.title} author={book.author}/>);

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}
```
 - It is important to note that a child should NOT be editing `props` values. Only the Parent should! So in this example, `Book` Components should never change the value of `props.title` or `props.author`. Those values must be changed in the `list` variable in `BookList` so that the values appropriately pass to every `Book`.

## Callback functions

## Inserting images
 - Inserting images have 2 steps. Import the image by telling the webpack the javaScript file uses the image and then get the image from the console. Then you can use the image how you want. 
 - Example:
   - ```
     import imageName from './imageName.png';
     console.log(imageName);
     function Header() {
      return <img src={imageName} alt = "imageName" />;
     }
     ```
 
## Asynchronous function calls

## Cookies & LocalStorage
     
