# Header and SASS

Quick Intro:
SASS (https://sass-lang.com/) is called a CSS pre-processor. It's just a tool that allows you to produce CSS, because coding in pure CSS can be very inconvenient and annoying.

With SASS and its features, you can declare variables, prevent yourself from repeating code, ignore semicolons and bad {}, and overall just makes your CSS development a lot faster. It's also easy to learn! Writing in SASS is basically writing in CSS without all the pain!

All your SASS code will live in SASS files. Our website bundler (webpack) will compile your SASS files to produce optimized CSS files, which your website can then use.

Check here to see how SASS turns into CSS: https://sass-lang.com/documentation.

## Exercise: Adding a <h1>

Our first job will be adding a header to our web application.
Usually, a header can be created with a `<h1>` which you place in an HTML file.
React applications work slightly different because HTML is done in Javascript files!

Navigate to `components/home/home.js` to find the file that manages our home page.
You should see this:

```javascript
export class HomePage extends React.Component {
   render() {
       return (
           <div id="view-home">
            {/* ADD A HEADER HERE */}
           </div>
       );
   }
}
```

Add a header: `<h1>Shake Shack Order Manager</h1>`

Remember, your web bundler tool (webpack) must be running in order to see your updates in a browser. It should be setup so that whenever you change your Javascript or SASS files, webpack will automatically detect your changes and automatically re-render your new changes. If you're not seeing changes, please refer back to the WebBundler section in this guide.


## Reading: Styling with SASS

Let's do a simple styling. We want to style this header black, and with font-family "Helvetica" and a font-size of 26px.
You should see at the top of `home.js` a line that connects this page to a `home.sass` file. This file should **exclusively** contain the styling for elements in `home.js`.

But before adding styling components, first take a look at `components/_constants.sass`. This is a file that is meant to define "global" CSS variables for the entire web application.
You should a few colors and a few font-related things defined here. The idea here is for the rest of the application to use these variables whenever it refers to a color or font. So if I decide that I want to slightly change my green colors or gray colors, I don't have to change the hexadecimal in many files. Instead, I can simply change the value here.
```
$colorBlack: #070605
$colorGreen: #54A432
$colorRed: #D80300
$colorWhite: #FFFFFF
$colorLightGray: #CCCCCC
$fontFamilyHelvetica: 'Helvetica'
```

To use these variables in SASS, take a look at `components/home/home.sass`.
Notice at the top of this file, that it "imports" contents from `_constants.sass` using `@import "../_constants.sass"`. Now `home.sass` can use all the variables defined in `_.constants.sass`.

We can use these variables like so:
```sass
#view-home
   width: 720px
   margin: 0 auto
   font-family: $fontFamilyHelvetica
   color: $colorBlack
```

## Exercise: Styling the <h1>
Style the `<h1>` that you just created. Give it a font-size of 26px and the color black.

```sass
#view-home h1
    font-size: 26px
    color: $colorBlack
```
Note: Please watch your indenting. SASS files use indenting to figure out how brackets will be created. Refer to the SASS documentation (https://sass-lang.com/documentation/syntax) for more information.
---

(Next Step)[./05_button_onclick.md]
