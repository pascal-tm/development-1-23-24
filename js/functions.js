// FUNCTIONS
console.log("%cJS - FUNCTIONS", "font-size: 24px; font-weight: bold");

// Functions are used to execute certain command
// To make it portable
// if it has to be executed multiple times
// If some of the values that are being used can change, but the equation itself will stay the same

function printOut()
{
    console.log("Hello!");
}

// To execute, you add the () to the function name
printOut();


// Parameters
// parameter can be regarded as a placeholder for a value that is required inside of the code block 
function personalizedGreeting(name)
{
    console.log(`Hello ${name}`);
}

// When a value is passed to the function, we call it an argument
personalizedGreeting("Martin");

function superFexiblePersonalizedGreeting(greeting, name)
{
    console.log(`${greeting} ${name}`);
}

// When a value is passed to the function, we call it an argument
superFexiblePersonalizedGreeting("Hi", "Petra");

// Predefining paramters that can change value, but rarely do
// Predefined parameters ALWAYS come at the end of the parameter list
function superFexiblePersonalizedGreetingWithPredefinedParameters(name, greeting = "Hello" )
{
    console.log(`${greeting} ${name}`);
}
superFexiblePersonalizedGreetingWithPredefinedParameters("Laura");
superFexiblePersonalizedGreetingWithPredefinedParameters("Laura", "Hey");


// Return statement
let greetings = [];
function personalizedGreetingWithReturn(name)
{
    return `Hello ${name}`;
    // Don't write anything after the return statement!
    // console.log("will never be executed");
}
greetings.push( personalizedGreetingWithReturn("Andrea") );
greetings.push( personalizedGreetingWithReturn("Martin") );
greetings.push( personalizedGreetingWithReturn("Petra") );
greetings.push( personalizedGreetingWithReturn("Laura") );
console.log(greetings);

let greetingText = personalizedGreetingWithReturn("Laura");
console.log(greetingText);

// scope of the function
// For every variable defined inside the code block of the function (and even loops), the variable is scoped to that code block. Meaning, it is not accessible from outside of that code block, as shown below.
function scopeExample()
{
    let scopeLmitedToFunctionBlock = "Test";
}
//console.log(scopeLmitedToFunctionBlock); 
// This will throw an error

// recursion
// this keyword

// Shorthand notation (param) => (return statement)


var shortHandPersonalizedGreeting = (name) => `Hello ${name}`;
/*
    Is exactly the same as writing:

    
    function personalizedGreeting(name)
    {
        return `Hello ${name}`;
    }
*/
// Note that there is no return statement -> shorthand notation is only used to increase writing speed and readability 
console.log( shortHandPersonalizedGreeting("Pascal") );

// Exercise
// Create a function called multiplicate that takes two argument called number1 and number2 which are multiplicated with each other. The multiplication value is returned in that function.

// Create a function called divide that takes two argument called number1 and number2 which are divided by each other. The division value is returned in that function.

// Create a function called isEven that takes one argument called number which returns a boolean that indicates whether the number that has been passed is even. 

// Create a function called printOut without parameters that calls the three above functions and prints out the results to the console.

// Addition:
// Make the printOut function take two numbers as arguments
