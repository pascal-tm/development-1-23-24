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

// foreach

// while

// do while