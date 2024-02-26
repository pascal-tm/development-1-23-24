// arrays
let classNames = [ 
    "Filip", 
    "James", 
    "Andrea", 
    "Jha", 
    "Luis" 
];

console.log(classNames);

// Exercise 
// Create two arrays: classNames1 containing 3 classnames and classNames2 containing 3 classNames
// Join these two arrays together in a variable called classNames

// extra:
// Print the length of the amount of class names in the classNames variable in the console
// Add another name to the classNames variable at the END of the array without using a variable that contains this name 
// Add another name to the classNames variable at the BEGINNING of the array without using a variable that contains this name

let classNames1Ex = [ 
    "Filip", 
    "James",
    "Pascal" 
];

let classNames2Ex = [ 
    "Andrea", 
    "Jha", 
    "Luis" 
];

let classNamesEx = classNames1Ex.concat(classNames2Ex);
console.log(classNamesEx);

let classNamesLengthEx = classNamesEx.length;
console.log(classNamesLengthEx);

classNamesEx.push("Martin");
console.log(classNamesEx);

classNamesEx.unshift("Johnny");
console.log(classNamesEx);


// Arrays: manipulating specific values
// And array is a key => value store
// In the case on an array, the key is implicit, meaning it's assigned automatically

// Get a specific value from an array
console.log(classNames[2]);

// Overwite a specific value on a specific place (=key) in array
classNames[2] = "Maria";
console.log(classNames);

// Get the last item from an array, no matter how long it is
console.log( classNames[ classNames.length - 1 ] )
// Note that we do - 1 because length starts counting from 1 and array keys start counting from 0

// Exercise
// Remove the first name in the classNames array, but without using the key numbers
// Remove the last name in the classNames array, but without using the key numbers
// Extra: create a string that lists all the class names separated by using a - (ie. name1 - name2 - name3) 
classNames.shift(); // remove first item
classNames.pop(); // remove last item

// Extra
classNamesConsole.join(" - ");


// Exercise
// Search for a specific name in the array (ie. Jha) and remove that name from the array

// Create a new array called kickedOut by 
let kickedOut = classNames.splice(0, 1);
// TODO

// Create an empty array called kickedOut. Remove the first name from the classNames array and add that person to the kickedOut array
let kickedOut = [];
var kickedOutPerson = classNamesConsole.shift();
kickedOut.push(kickedOutPerson);


