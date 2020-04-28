# React Images

In HTML, using images looks like this:

```html
<img src="../../../xxxxxxxx.jpg"/>
```

In React, we can't use the source itself in the `src` field. We'll have to do an import statement like so:

```javascript
import QuitImgSrc from "./../../assets/i_quit.jpg";
...

... In a ReactComponent ...
render() {
    return(
        ...
        <img src={QuitImgSrc} />
        ...
    );
}
```

## Exercise: Use Quit image on Quit Page

1. Import the source of the quit image. You can find it in `../../assets/i_quit.jpg`. Or in other words, the assets folder from the root directory.
2. Get the `<img>` to show up with the correct picture.

![Screenshot_Quit_Image](../images/screenshot_final_quit.png)

## Exercise: Linking back to the Home Page

When you get the image to appear, create a link under the image to link back to the home page. Remember the `Router` behavior in `main.js`. The home page is at the url `/`.

**Style**

- Make sure the header, image and link are all horizontally centered.
- Give some breathing room (margin space) between these elements.
- Make the link green (use `_constants.sass`)

---

[Continue](./13_react_function_parameters.md)
