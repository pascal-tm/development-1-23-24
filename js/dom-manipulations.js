// DOM Manipulations
console.log("%cJS - DOM MANIPULATIONS", "font-size: 24px; font-weight: bold");

// Get by id
// It returns an element which you can directly manipulate by using it's properties/methods
document.getElementById("alertBox1");

// Get by classname
// Returns an array (HTMLCollection). You need to use a for loop to manipulate the returned result 
let elements = document.getElementsByClassName("box1");
/*for (let key in elements)
{
    let element = elements[key];
    element.classList.remove("alert-primary");
    element.classList.add("alert-danger");
}*/

// Or getting the first element from the array:
let firstElement = elements[0];

// Get by other attributes
// tagname (html element)
document.getElementsByTagName("p");

// name (attribute)
document.getElementsByName("email");

// Manipulating classes of an element
// document.getElementById("alertBox1").className
// Returns the classes as a string
// You can manipulate the classes this way, but there are more convenient ways to do that, see below
document.getElementById("alertBox1").className

// document.getElementById("alertBox1").classList.add
document.getElementById("alertBox1").classList.add("randomClass")

// document.getElementById("alertBox1").classList.remove
document.getElementById("alertBox1").classList.remove("randomClass")

// document.getElementById("alertBox1").classList.contains
// Checks whether an elements contains a specific class
document.getElementById("alertBox1").classList.contains("alert")

// Toggle with condition
// Note that if the condition is false, the class will not be toggled
// Note that if the condition is true and the class is already there, it will not be removed. If it's not there, it will be added.
let conditionToToggle = false;
document.getElementById("alertBox1").classList.toggle("alert-danger", conditionToToggle);

// Add/remove multiple classes with spread operator (...classes)
let classList = ["alert-danger", "box1"];
document.getElementById("alertBox1").classList.add(...classList),    


// Exercise
// In your HTML document
// Create an input field of type text with an id called guestList
// Add a paragraph element below the input field with an id called bouncer and some text that says "The bouncer gives you the light"
// Add a default value to the input field (ie. Pascal)
// In the JS
// Create an array called guests that contains a few names
// Use JS to get the value from the input field
// Use JS to figure out whether the name is on the guestlist
// If the name is on the guestlist you need to change the background color of the paragraph by adding a class called called 'allowed' to the bouncer paragraph class list
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
