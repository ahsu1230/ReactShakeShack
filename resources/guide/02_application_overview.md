# Application Overview

## Single Page Applications

The modern way to develop web applications is creating "Single-page applications". The idea behind a single-page application is to split your page into several different components (think a profile picture area, a header for menu links, a main-content area, a sidebar, etc.). From there, whenever you go to a page of the website, you don't have to re-render the entire screen. Instead, you simply re-render the components that need to change in order to show the new page.

On many older websites, whenever you click a link (to another page in the site), the page reloads in its entirety - you see a blank screen for a couple of seconds and then the new page. In a single page application, clicking a link keeps you on the same page, but replaces a part of it with the new content. It makes it look like you went to another page but with a much more fluid experience.

## How a React Application works

ReactJs is a Javascript framework that is GREAT for developing single page applications because it encourages developers to think about their website as a collection of components. React provides a great way to allow individual components to change on their own without having to affect the rest of the screen. This allows for faster webpage rendering and easier development!

## Project Organization - Folder structure

Normally, when you create an application, you start with an `index.html`.
This is your starting html page and from here you can link Javascript files from a `js` folder, CSS files from a `css` folder and other HTML files from an `html` folder.

In React, however, this separation kind of gets jumbled up. Rather than separation by code and file types, it's actually preferable to separate things by components. As a result, one recommended way to organize React files is to organize your files by components.

For example, visit an Instagram website page (https://www.instagram.com/arianagrande). You can split this page into several components: a header, a profile picture, profile information (like name, followers, following, etc.) a list of posts, and a footer at the bottom (with more links to other Instagram services).

If we were to split this into files and folders, I could have this project structure:

- components
  - header
  - profile
    - profile-pic
    - profile-description
  - posts
  - footer

You could even split components into smaller components. So maybe we could split the `profile` component into `profile-pic` and `profile-description` components (both of which have their own sub-directories). See the idea?

## Project Organization - Files

Great! Now we've split our page into components and each component has its own folder. In every folder, files related to the component should live there.
So the `header` folder would have Javascript and CSS files that ONLY relate to the header and nothing else.

- header
  - header.js
  - header.css

## Where are the HTML files?

HTML in React is weird... it's all done in the Javascript files! Huh?

In React, we use Javascript to _produce_ HTML for us. Consequently, we don't need any additional HTML files and instead, only require `index.html`. The index.html links to a Javascript file, which produces the rest of the HTML for us.

[Click here to continue](./03_webbundler.md)
