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
let guestlist = ["Luis", "Laura", "Jha"];
let bouncerParagraph = document.getElementById("bouncer");

document.getElementById("guest").addEventListener("keyup", (event) => {

    let guest = document.getElementById("guest").value;

    if (event.isComposing || event.keyCode === 229) {
      return;
    }

    let guestIsAllowed = guestlist.includes(guest);

    if (guestIsAllowed) {
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
// When you click on the 'add'-button a list item (<li>New item (<span>x</span>)</li>) is added to an empty unordered list (<ul></ul>) that is located below the 'add'-button and which will function  as your container.
// The newly added items also have a remove button (ie. <span>x</span>). When you click on that button, the list item is removed.

document.getElementsByClassName('ex-01-add')[0]
    .addEventListener('click', (event) => {
        document.getElementsByClassName('ex-01-container')[0].innerHTML += '<li>New item (<span class="ex-01-remove">x</span>)</li>';
    });

    // Add an event listener to all elements that have the class 'ex-01-remove'
    // We are approaching it from the body-element because then we can attach event listeners to elements that are added after the HTML has been already rendered
    document.querySelector('body').addEventListener('click', function(event) {
        // Here we are looking at the target on which is clicked
        // If it contains the ex-01-remove class, then we can remove the li-element
        if (event.target.className == 'ex-01-remove' ) {
            // We have clicked on the span, but need to remove the entire li-element
            // We do this by looking for the closes li-element from the perspective of the span
            event.target.closest('li').remove();
        }
    });


// Additional exercise
// Create an array called guestlist that contains some names
// When opening the document, these name are shown in a <ul></ul> element by adding them as list-items (<li></li>)
// Above the ul-element, add an input type text field with a button 'add' next to it.
// When you open the document, all the names in the guestlist array are shown in the ul-element.
// When you write a name in the input field, the name is added to the array and to the ul-element
// You should be able to remove any name from the ul-element (make sure to also delete that name from the guestlist array)

// Solution provided by Andrea!

let guestlist2 = ["Alice", "Bob", "Charlie", "Kartoffel", "patata", "potatoe"];
let guestlistElement = document.getElementById("guestlist-2");
let addButton = document.getElementById("addButton");
let guestNameInput = document.getElementById("guestName");

function updateGuestlist() {
  guestlistElement.innerHTML = ""; // Clear existing list items

  for (let key in guestlist2) {
    let guest = guestlist2[key];
    let listItem = document.createElement("li");
    listItem.textContent = guest;
    listItem.setAttribute ("data-id",key);
    listItem.addEventListener("click", () => {
        let index = listItem.getAttribute("data-id")
        guestlist2.splice(index, 1);
        updateGuestlist();
    });
    guestlistElement.appendChild(listItem);
  }
}

updateGuestlist(); // Display initial guest list

addButton.addEventListener("click", () => {
  let newGuestName = guestNameInput.value.trim();
  if (newGuestName) {
    guestlist2.push(newGuestName);
    updateGuestlist();
    guestNameInput.value = ""; // Clear input field
  }
});

  