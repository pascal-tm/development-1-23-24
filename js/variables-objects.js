// OBJECTS
console.log("%cJS - OBJECTS", "font-size: 24px; font-weight: bold");

// == associative array
// <-> numerical array -> see previously
// words are used in stead of numbers to identify a value
// The values are usually things that belong to the same 'class', so called properties, but the values of these properties don't necessarily compare to eachother (as opposed to the values of a numerical array, which should be comparable)
// the values can be of any type
let classObject = {
    teacher: "Pascal",
    students: ["Andrea", "Laura", "Petra", "Martin"],
    beamer: true
}

// To loop over the results, see the loops chapter

// How to show an individual value:
console.log( classObject.teacher );

// Nesting objects
let company = {
    brand: "Tesla",
    cars: ["Model X", "Model S", "Model M", "Cybertruck" ],
    structure : {
        chairman: "Robyn Denholm",
        CEO: "Elon Musk",
        CFO: "Zachary J. Kirkhorn",
        CTO: "JB Straubel",
    }
}

// You can nest objects within objects without limit.


// This notation forms the basis for Object Oriented Programming (= classes)
// If we have time, we'll see some more about this later. It's not really required to be able to write JavaScript, but it will help to keep your code clean and clear, especially if you are working on large projects