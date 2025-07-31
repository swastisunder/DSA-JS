/* 
===========================
📘 JavaScript Output Methods
===========================

👉 JavaScript provides different ways to show output during code execution.
We can use the following methods:

1️⃣ console.log()
2️⃣ alert()
3️⃣ prompt()
4️⃣ confirm()
5️⃣ console.error()
6️⃣ console.warn()
7️⃣ console.table()
*/

//////////////////////////////////////////
// 1️⃣ console.log() 
//////////////////////////////////////////

// Used to print output to the browser console
console.log("Hello, JavaScript!");

// Print numbers and expressions
console.log(2 + 3); // 5
console.log("Sum =", 10 + 20); // Sum = 30

// Debugging example
let x = 5;
let y = 10;
console.log("x =", x, ", y =", y); // x = 5 , y = 10

//////////////////////////////////////////
// 2️⃣ alert()
//////////////////////////////////////////

// Shows a popup alert with a message
// alert("This is a simple alert!");

// Note: This works only in browsers, not Node.js

//////////////////////////////////////////
// 3️⃣ prompt()
//////////////////////////////////////////

// Ask user for input (returns a string)
// let name = prompt("What is your name?");
// console.log("User's name is", name);

// Note: Works only in browsers

//////////////////////////////////////////
// 4️⃣ confirm()
//////////////////////////////////////////

// Ask for a yes/no confirmation (returns true/false)
// let result = confirm("Are you sure?");
// console.log("User clicked:", result);

// Note: Works only in browsers

//////////////////////////////////////////
// 5️⃣ console.error()
//////////////////////////////////////////

// Show error message in console
console.error("Something went wrong!");

// Useful for debugging

//////////////////////////////////////////
// 6️⃣ console.warn()
//////////////////////////////////////////

// Show warning message
console.warn("This is just a warning!");

//////////////////////////////////////////
// 7️⃣ console.table()
//////////////////////////////////////////

// Display data in a table format
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 }
];
console.table(users);

/*
===========================
📌 Summary
===========================

| Method           | Description                        | Usage          |
|------------------|------------------------------------|----------------|
| console.log()     | Logs output to console              | Debugging/info |
| alert()           | Shows popup alert (browser only)    | Notifications  |
| prompt()          | Ask input from user (browser only)  | Input          |
| confirm()         | Ask yes/no (browser only)           | Confirmation   |
| console.error()   | Logs error message to console       | Errors         |
| console.warn()    | Logs warning message                | Warnings       |
| console.table()   | Logs data in table format           | Objects/arrays |

*/

