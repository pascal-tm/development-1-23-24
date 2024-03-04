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
// If both conditions (length and ? or !) aren't met, you need to print this to the console, saying that the password doesn't meet the requirements. If the password meets the requirements, you don't need to do anything.
let password = "blablabla!";

let isLongerThan10Characters = password.length > 10;
let containsExclamationMark = password.includes('!');
let containsQuestionMark = password.includes('?');

if (!isLongerThan10Characters && (!containsExclamationMark || !containsQuestionMark))
{
    console.log(`The password (${password}) you used doesn't meet the requirements `);
}


// >
// Bigger than
let numberToCheck = 10;
if ( numberToCheck > 8 )
{
    console.log(`${numberToCheck} is bigger than 8`);
}

// >=
// Bigger than or equal to
if ( numberToCheck >= 10 )
{
    console.log(`${numberToCheck} is bigger than or equal to 10`);
}

// <
// Smaller than
if ( numberToCheck < 11 )
{
    console.log(`${numberToCheck} is smaller than 11`);
}

// <=
// Smaller than or equal to
if ( numberToCheck <= 10 )
{
    console.log(`${numberToCheck} is smaller than or equal to 10`);
}


// if else
if( true )
{
    console.log("This condition resolves to true");
}
else
{
    console.log("This condition resolves to false");
}

// If elseif
let gender = null;
if( gender == "m" )
{
    console.log("This person is m");
}
else if ( gender == "f" )
{
    console.log("This person is f");
}
else if ( gender == "x" )
{
    console.log("This person is x");
}
else
{
    console.log("This person hasn't shared their gender");
}

// Switch
let gender2 = "m";
switch(gender2) {
    case "m":
        console.log("(switch: ) This person is m");
        break;
    case "f":
        console.log("(switch: ) This person is m");
        break;
    case "x":
        console.log("(switch: ) This person is x");
        break;
    default:
        console.log("(switch: ) This person hasn't shared their gender");
}

// if else shorthand '' ? '' : ''
let amountOfReservations = 1;
let reservationStringShortHand = `There ${ amountOfReservations > 1 ? "are" : "is" } ${amountOfReservations} reservation${ amountOfReservations > 1 ? "s" : "" } ${amountOfReservations} left`;
console.log(reservationStringShortHand);


// Exercise
// Create a variable called number that contains a number between 0 and 100;
// By default, the number is printed in the console.
// If the number is a multiple of 3, you need to print "Fizz" instead of that number.
// If the number is a multiple of 5, you need to print "Buzz" instead of that number.
// If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.

// switch
