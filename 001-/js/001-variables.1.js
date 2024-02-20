// Console
console.log('hello');

// Variables
// ---
var digit = 1;
let digit2 = 2;

// Use let as much as possible! (unless required otherwise, but very unlikely)

// CamelCase/camelCase, kebab-case, snake_case

 let thisisaverylongvariablename = "test";
 // CamelCase
 //let ThisIsAVeryLongVariableName = "test";
 //let thisIsAVeryLongVariableName = "test"; // dromedare case, the preferred way!

 // Kebabcase (not possible in js)
 // let this-is-a-very-long-variable-name = "test"; // Not possible in js, but standard in CSS!

 // snake_case
 let this_is_a_very_long_variable_name = "test";

 // When writing variable names, always make the name a description of the value it wil contain
 let testString = "test"; // good
 //let thisisaverylongvariablename = "test"; // bad
 

// integers
let number = 1;
let floatingPointNumber = 1.82829;

// strings (", ', `, ` with variables)
//let name = "Pascal";
let quote = "\"This is Sparta!\""; // backslash \ escapes characters reserved for JS
let quoteUsingSingleQuotes = '"This is Sparta!"'; // backslash \ escapes characters reserved for JS
let quoteUsingSingleQuotesAndDoubleQuotes = '"This \'is\' Sparta!"';
console.log(quoteUsingSingleQuotesAndDoubleQuotes);

let stringOnMultipleLines = `line 1
line 2`; 

let name = "Pascal";
let lastName = "Nosenzo";

let fullName = name + " " +lastName;
let fullNameWithStringLiteral = `Hello ${name} ${lastName}`; // using template literals

// Exercise
// ---
// Create two variables: firstName, lastName
// Create a third variable greeting which contains a greeting using your first name and last name
// Use the string literal declaration `` to create the third variable
// Print the greeting value to to console
// Don't forget to use let and ;

// Additional exercise: print the amount of characters the greeting variable contains

let firstNameEx = 'Pascal';
let lastNameEx = 'Nosenzo';

let greetingEx = `Hello, ${firstNameEx} ${lastNameEx}`;
let amountOfCharactersInGreeting = `The greeting variable contains ${greetingEx.length} characters`

console.log(greetingEx);
console.log(amountOfCharactersInGreeting);

// boolean
let isCloudy = true; // which you can also write as 1
let isSunny = false; // which you can also write as 0

console.log(isCloudy);

// undefined
let variableWithoutContent;
console.log(typeof variableWithoutContent);

// null
let variableWithANullValue = null;
console.log(variableWithANullValue);




