# React Links

Normally in HTML, you would use the `<a>` tag to represent hyperlinks. In React, however, `<a>` tags shouldn't be used, but instead `<Link>` tags imported from React with this statement:

``` javascript
import { Link } from "react-router-dom";
```

The format of a `<Link>` is very simple. It has a `to` property which sends the user to that page link. And it has a name. This name is shown to the user.

```html
    <Link to="./somePage">Go to other page</Link>
    // This is equivalent to:
    // <a href="./somePage">Go to other page</a>
```

The reason why we have this, is because of how React works with `Routers` and `Links`. Take a look at the `components/main.js` file. This is where we define website routes.

```html
<Router>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quit" component={Quit} />
    </Switch>
</Router>
```

This `Router` component is telling us there are two valid URLs to this site. There's the home page which is "/" (i.e. http://localhost:8080/) and the quit page (http://localhost:8080/quit). Any other url won't do anything.

So nothing to do here, but just observe this is where URL routes are defined in the front-end client.

---

[Continue](./12_react_img.md)