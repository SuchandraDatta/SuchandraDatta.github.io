**RESPONSIVE PORTFOLIO WEBSITE**

A site can be made sufficiently responsive by use of units such as vw, vh, em, rem and % where applicable along with media queries with
proper breakpoints. Bootstrap4 is a wonderful CSS framework that allows us to design complex responsive layouts with a low learning curve 
for beginners. It works on dividing the screen into 12 columns, elements are defined as taking up 3 or 4 or 6 of these so if an element takes
6 of the 12 columns, it will be displayed at 50% of the width of the screen on a variety of screens of different viewport sizes. Utility classes,
in-built components like hamburger menus, beautifully crafted carousels with a wonderfully lucid documentation offers a really low learning
curve for beginners.

:maple_leaf:Extensive coverage of this topic is present on my Medium article 
https://medium.com/@sdutta7691/build-and-host-your-first-portfolio-website-ef9bbcc8f8b6

Along with understanding the basics of responsive design, this project also helped to understand certain aspects of website optimization

:maple_leaf:Using images of proper size. Either assign images of different sizes using srcset tag where we specify the image to be displayed 
based on a media query or use properly compressed images wherever applicable.

:maple_leaf:Load all scripts at the end rather than in the head. It'll block the elements on the page from rendering. Also if the script 
accesses any DOM element, loading it at the end ensures it accesses the DOM only after the element is sure to have been properly loaded and
displayed. Use async attribute in script tags to load it parallel to page load and defer attribute when we want to execute scripts only after
the entire page is loaded and parsed.

:maple_leaf:Minify wherever applicable

:maple_leaf:Also to help show up in searches as well as aid screen readers, it's best practice to use semantic tags

Things learnt about JavaScript

:herb:Checking when an element is within the viewport using getBoundingClientRect. Used to trigger the terminal animation only when user
scrolls it into the screen.

:herb:Manipulating DOM for creating the digital clock.

![githubPic1](https://user-images.githubusercontent.com/41965125/76338694-1246fe80-631f-11ea-9de0-b2afb03adca7.png)

The Lighthouse Audit tool helps to get an idea about the performance of the page.



