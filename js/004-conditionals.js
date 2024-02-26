// Conditionals

// if
let number = 7;
let isOdd = number % 2;
if (isOdd)
{
    console.log(`The number ${number} is odd`);
}

// Combining conditions
// && (and)
// It means all conditions folling the && sign  ALSO need to be true for the if block to be executed
if (isOdd && number > 3)
{
    console.log(`The number ${number} is odd and bigger than 3`);
} 

// || (or)
// It means all conditions folling the && sign  ALSO need to be true for the if block to be executed
if (isOdd || number < 3)
{
    console.log(`The number ${number} is odd and smaller than 3`);
}

// Exercise
// ---
// Create a variable called password (which you can assign any value you want to, but you need to check whether your conditions are correct, so at some point it will have to contain at least 10 chars and a ? or a !)
// Count te characters that are in that password variable
// Check whether the name has a length that is longer than 10 characters
// Check whether the name contains an ! or & ?
// If both conditions (length and ? or !) aren't met, you need to print this to the console, saying that the password doesn't meet the requirements. If the password does meet the requirements, you don't need to do anything.

// >
// Bigger than

// >=
// Bigger than or equal to

// <
// Small than

// <=
// Smaller than or equal to


// if shorthand '' ? '' : ''

// if else

// Exercise
// Create a variable called number that contains a number between 0 and 100;
// By default, the number is printed in the console.
// If the number is a multiple of 3, you need to print "Fizz" instead of that number.
// If the number is a multiple of 5, you need to print "Buzz" instead of that number.
// If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.

// switch
