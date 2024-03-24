// DOM Manipulations
console.log("%cJS - DOM MANIPULATIONS", "font-size: 24px; font-weight: bold");

// Get by id
// It returns an element which you can directly manipulate by using it's properties/methods
document.getElementById("alertBox1");

// Get by classname
// Returns an array (HTMLCollection). You need to use a for loop to manipulate the returned result 
let elements = document.getElementsByClassName("box1");
for (let element of elements)
{
    element.classList.remove("alert-primary");
    element.classList.add("alert-danger");
}

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
document.getElementById("alertBox1").classList.add(...classList);  


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

// Adding/manipulating HTML elements
document.getElementById("container01").innerHTML = 'this content was added by using JS'

document.getElementById("container02").innerHTML = '<h3>You can also add HTML elements, the way you would in any HTML document</h3>';

// Exercise
// Create an array called llmModels, this array contains objects with the following properties: name & website. Add at least 3 models (ie. chatGpt, Midjourney, Gemini)
// In your HTML, create an element that will be the container that will be the placeholder of the HTML we are going to print out.
// Using JavaScript, add a <ul></ul> element to the innerHTML of the container
// Loop over the values of the llmModels array. Every value should be a list item (ie. <li>) and every value should be a link that shows the name of the LLM linking to the website (ie. <a href="url">llm name</a>) 
// Make sure your HTML is valid (ie. the closing </ul> tag should come after the looping of the values, all <li>-items have a closing </li>-tag in the appropiate place)

// Additional exercise
// Visualisation of the table of multiplication by showing it in an actual <table> element
// Remember: nesting for-loops!

// Advanced method for creating HTML-elements
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

// Using templates
// TBC?
