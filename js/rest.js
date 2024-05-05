console.log("%cJS - REST", "font-size: 24px; font-weight: bold");

// REST
/* 
    Stands for Representational State Transfer and allows a program to interact with other programs, 
    regardless of the programming languages they are written in.
    It's a protocol to interact with APIs, application programming interfaces, basically the doors
    that are deliberately exposed to the outside world so interaction is possible.
    You communicate using an API and not directly with the database, because you want to keep certain
    pieces from your database hidden, or you want to provide a specific functionality that is too
    complex for a database to execute.
    
    In web environments REST calls usually use JSON to send back and forth information
    Below we will see 4 operations that you can execute when doing a REST call
*/

// Using fetch
/*
    Fetch is a library that allows you to easily execute REST calls. It's still JavaScript, but it
    provides some boilerplate functionality so you don't have write as much code as you usually should

    As you can see the axios library has been downloaded and loaded in the HTML-document. Make sure
    the axios library is loaded BEFORE the script that uses the library, because the browser will load
    these file in consecutive order.
*/

// GET request
/*
    The GET-request is the easiest one. You request some data from the API and usually you don't have to
    provide any additional information
*/


// Fetching JSON from API (see REST call)
// Use example REST api: https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));


// CREATE

// DELETE

// UPDATE