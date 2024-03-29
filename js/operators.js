// Operators
console.log("%cJS - OPERATORS", "font-size: 24px; font-weight: bold");


// ---
// +
let string1 = "this is a";
let string2 = "test";

let completeString = string1 + " " + string2;

let number1 = 64;
let number2 = 32;

let sum = number1 + number2;

// -
let subtract = number1 - number2; 

// / 
let division = number1 / number2; 

// * 
let multiplication = number1 * number2;

// %
// Returns the rest value of number it's being divided by
let modulo = number1 % number2;
// But actually we use it mostly to determine whether a number is odd or even
let isOdd = 7 % 2;

// Increment
let increment = 6;
++increment;
console.log(increment);
// There's a difference between pre-increment (++increment) and post-increment (increment++), but it's too advanced to explain right now
// It's preferred to use a pre-increment (performance wise)

// Decrement
let decrement = 5;
--decrement;
console.log(decrement);

// == != (===)
// Returns true if the condition is met, without checking the type
let isEqual = number1 == number2;
let isNotEqual = number1 != number2;

let isEqualAndTypeChecked = 1 === true; // Will result in false, because 1 is an integer and true is a bool(ean)

