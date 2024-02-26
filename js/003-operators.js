// Operators
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
let modulo = number1 % number2;
// But actually we use it mostly to determine whether a number is odd or even
let isOdd = 7 % 2;


// == != (===)
// Returns true if the condition is met, without checking the type
let isEqual = number1 == number2;
let isNotEqual = number1 != number2;

let isEqualAndTypeChecked = 1 === true; // Will result in false, because 1 is an integer and true is a bool(ean)

