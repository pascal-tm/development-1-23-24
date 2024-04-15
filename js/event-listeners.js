// EVENT LISTENERS
console.log("%cJS - EVENT LISTENERS", "font-size: 24px; font-weight: bold");

// Event listeners are methods that listen to when a specific event fires.
// As soon as this event fires, you are able to do all kinds of functionality, event preventing the default behaviour
document.getElementById("input01").addEventListener("keyup", (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    // do something
    console.log("input is changing");
  });

// Let's make the DOM-manipulation exercise a bit more dynamic:
let guests = ["Luis", "Laura", "Jha"];
let bouncerParagraph = document.getElementById("bouncer");

document.getElementById("guestList").addEventListener("keyup", (event) => {

    let visitor = document.getElementById("guestList").value;

    if (event.isComposing || event.keyCode === 229) {
      return;
    }

    let visitorIsAllowed = guests.includes(visitor);

    if (visitorIsAllowed) {
        bouncerParagraph.classList.remove('banned');
        bouncerParagraph.classList.add('alert', 'allowed');
    } else {
        bouncerParagraph.classList.remove('allowed');
        bouncerParagraph.classList.add('alert', 'banned');
    }
    // do something
    console.log("input is changing");
  });

  // There are all kinds of different event listener
  // Click event
document.getElementById("header01").addEventListener("click", (event) => {
    alert("annoying popup here");
});

// Remove element after click
document.querySelector('#paragraph01 span').addEventListener("click", (event) => {
    document.getElementById('paragraph01').remove();
});

// Exercise
// Create a button (you can use a regular span element that contains the word 'add', ie. <span>add</span>)
// add an event listener to that button that listens to the click event
// When you click on the 'add'-button a list item (<li></li>) is added to an empty unordered list (<ul></ul>) that is located below the 'add'-button

  