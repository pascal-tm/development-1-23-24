// DOM Manipulations
console.log("%cJS - DOM MANIPULATIONS", "font-size: 24px; font-weight: bold");

// Get by id

// Get by classname

// Get by other attributes
// tagname (html element)
// name (attribute)

// Adding classes to an element
// document.getElementById("alertBox1").className
// document.getElementById("alertBox1").classList.add
// document.getElementById("alertBox1").classList.remove
// document.getElementById("alertBox1").classList.contains
// document.getElementById("alertBox1").classList.toggle (+ condition)
// Add/remove multiple classes with spread operator (...classes)    


// Exercise
// In your HTML document
// Create an input field of type text with an id called guestList
// Add a paragraph element below the input field with an id called bouncer and some text that says "The bouncer give you the light"
// Add a default value to the input field (ie. Pascal)
// In the JS
// Create an array called guests that contains a few names
// Use JS to get the value from the input field
// Use JS to figure out whether the name is on the guestlist
// If the name is on the guestlist you need to change the background color of the paragraph by adding a class called allowed to the bouncer paragraph class list
// If the name is not on the guestlist you need to change the background color of the paragrapg by adding a class called banned to the bouncer paragrapg class list
// Note: you can do this by using classes, create a class called 'allowed' and 'banned' in a css file
// Note: we'll see how you can listen to immediate changes in the input field when we're dealing with event listeners, or... you can do the additional exercise ;)

// Add HTML to existing document

// Advanced method
/*
    function create(htmlStr) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    }

    var fragment = create('<div>Hello!</div><p>...</p>');
    // You can use native DOM methods to insert the fragment:
    document.body.insertBefore(fragment, document.body.childNodes[0]);
*/
