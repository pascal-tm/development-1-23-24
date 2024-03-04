console.log("%cJS - LOOPS", "font-size: 24px; font-weight: bold");

// For loop
for( let number = 0; number < 10; ++number )
{
    console.log(number);
}

// nested loops
for( let table = 1; table < 10; ++table )
{
    console.log(`the table of: ${table}`);

    // For loop
    for( let multiplication = 1; multiplication < 10; ++multiplication )
    {
        console.log(table * multiplication);
    } 
}

// Exercise
// Goal: print the tables of multiplications from 1 tot 9 to the console in the following format:
// the table of 1: 1 - 2 - 3 - 4 - ... - 9
// the table of 2: 1 - 4 - 6 - 8 - ... - 18
// ...
// the table of 9: 9 - 27 - 36 - 45 - ... - 81
// FORMAT: the table of (table): (multiplication) - (multiplication)

// You have to use nested for loops to do this
// Create an array that will contain the multiplications of a specific table
// Then you print the result for every table and it is formated like this: the table of 2: 1 - 4 - 6 - 8

// Tip: start with the outer for loop. Try to print out the following:
// the table of 1:
// the table of 2:
// ...
// the table of 9:
// If that works, you can add the nested for-loop




// foreach

// while

// do while