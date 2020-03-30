# React Images

In HTML, using images looks like this:

```
<img src="../../../xxxxxxxx.jpg"/>
```

In React, we can't use the source itself in the `src` field. We'll have to do an import statement like so:

```javascript
import src_img from "../../assets/i_quit.jpg";
...
... In React Component render() return...
    <img src={src_img} />
```

## Exercise: Use Quit image on Quit Page

1. Import the source of the quit image. You can find it in `../../assets/i_quit.jpg`. Or in other words, the assets folder from the root directory.
2. Get the `<img>` to show up with the correct picture.

[Continue](./13_redux_actions_reducers.md)