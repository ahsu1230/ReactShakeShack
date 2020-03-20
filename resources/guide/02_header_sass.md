# Header and SASS
Our first job will be adding a header to our web application.

Usually, a header can be created with a `<h1>` which you place in an HTML file.
React applications work slightly different because HTML is done in Javascript files!

Navigate to `components/home/home.js` to find the main file that manages our home page.
You should see this:
```
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

### Exercise
Add a header in between the `<div>`s to create your header.
```
<h1>Shake Shack Order Manager</h1>
```
---

Remember, `parcel` is a tool that must be running in order to see your updates in a browser.
It was a cool functionality where every time you edit a file, your browser should update with your latest changes! If you don't see your header, double check your typos and/or re-run parcel!
You can re-run commands in Terminal / Command Prompt by first using `Ctrl-C` to cancel it. And then re-entering the command.


After doing this, let's do a simple styling. We want to style this header black, and with font-family "Helvetica" and a font-size of 26px.
You should see at the top of `home.js` a line that connects this page to a `home.sass` file.

SASS is a CSS-based language that makes it easier for developers to create CSS properties and style HTML elements.
CSS can be cumbersome to use because of restrictions on semicolons, brackets, etc.

But SASS makes CSS a lot easier and reduces duplication of code by allowing variables, importing, etc.

First take a look at `components/_constants.sass`.
This is a file that is meant to define "global" CSS variables for the entire web application.
You should a few colors and a few font-related things defined here. The idea here is for the rest of the application to use these variables whenever it refers to a color or font.

So if I decide that I want to slightly change my green colors or gray colors, I don't have to change the hexadecimal in many files. Instead, I can simply change the value here.
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
```
#view-home
   width: 720px
   margin: 0 auto
   font-family: $fontFamilyHelvetica
   color: $colorBlack
```

### Exercise
Style the `<h1>` that you just created. Give it a font-size of 26px and the color black.

```
#view-home h1
    font-size: 26px
    color: $colorBlack
```
Note: Please watch your indenting. SASS files use indenting to figure out how brackets will be created. Refer to the SASS documentation (https://sass-lang.com/documentation/syntax) for more information.
---

(Next Step)[./03_asdf.md]
