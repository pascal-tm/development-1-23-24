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

function multiplicate (number1, number2)
{
    return number1 * number2;
}

function divide (number1, number2)
{
    return number1 / number2;
}

function isEven (number1)
{
    return (number1 % 2) ? false : true;
    // easier notation: !(number1 % 2); ! flips the value of a boolean, meaning true becomes false and false becomes true
}

function printOut()
{
   console.log( multiplicate(4, 10) );
   console.log( divide(4, 10) ); 
   console.log( isEven(4) );
}

printOut();

// Addition:
// Make the printOut function take two numbers as arguments
function printOutAddition(number1, number2)
{
    console.log( `addition: multiplication: ${ multiplicate(number1, number2)}` );
    console.log( `addition: division: ${ divide(number1, number2)}` ); 
    console.log( `addition: isEven: ${isEven(number1)}` );
}
printOutAddition(1000, 838736);

// Anonymous functions
// Anonymous functions don't have a name, their functionality is returned immediately to the variable or property it's being assigned to. 
// It has some consequences for using the 'this' keyword.
// Basically, when using functions inside of objects, it's always better to used anonymous functions so you can make use of the this keyword in order to refer to the variable itself.
let anonymousFunction = function () {
    console.log("Hello from the anonymous function")
}
anonymousFunction();


// Exercise
// Create an object called mathHelper. Add four properties to this object 
// - multiplicate
// - divide
// - isEven 
// - printOut
// The functionality of these functions is exactly the same as the exercise above
// Use anonymous functions in these properties
// Make sure this object will result in the same output as the exercise above, only difference is that you call the printOut function by accessing the mathHelper object first.
// ie, I need to be able to call the function like this: mathHelper.printOut(27, 29);
let mathHelper = {
    multiplicate: function (number1, number2)
        {
            return number1 * number2;
        },
    divide: function (number1, number2)
        {
            return number1 / number2;
        },
    isEven: function (number1)
        {
            return (number1 % 2) ? false : true;
        },
    printOut: function (number1, number2)
    {
        console.log( `object: multiplication: ${ this.multiplicate(number1, number2)}` );
        console.log( `object: division: ${ this.divide(number1, number2)}` ); 
        console.log( `object: isEven: ${ this.isEven(number1)}` );
    }
}
mathHelper.printOut(39, 49);

// Addition
// Now add an extra property to the mathHelper object called counter. The default value of this property is 0. This property will keep track of how many times a function of the mathHelper has been called. This means that every time multiplicate, divide, isEven or printOut is called, the counter needs to be incremented with 1.

let mathHelperAddition = {
    counter: 0,
    multiplicate: function (number1, number2)
        {
            ++this.counter;
            return number1 * number2;
        },
    divide: function (number1, number2)
        {
            ++this.counter;
            return number1 / number2;
        },
    isEven: function (number1)
        {
            ++this.counter;
            return (number1 % 2) ? false : true;
        },
    printOut: function (number1, number2)
    {
        ++this.counter;
        console.log( `object addition: multiplication: ${ this.multiplicate(number1, number2)}` );
        console.log( `object addition: division: ${ this.divide(number1, number2)}` ); 
        console.log( `object addition: isEven: ${ this.isEven(number1)}` );
    }
}

mathHelperAddition.isEven(39);
mathHelperAddition.divide(39, 49);
mathHelperAddition.multiplicate(39, 49);
mathHelperAddition.printOut(39, 49);

console.log(`Object addition counter: ${mathHelperAddition.counter} methods have been called`);


