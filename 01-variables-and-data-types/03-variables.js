/* 
===========================
📘 JavaScript Variables
===========================

👉 A variable is a container for storing data values.

===========================
📌 Steps to Create a Variable
===========================

1️⃣ Choose a variable keyword → var, let, or const  
2️⃣ Give it a name (identifier)  
3️⃣ Optionally assign a value  

Syntax:
keyword variableName = value;

Example:
let age = 21;

*/

/////////////////////////////////////////////
// ✅ Different Ways to Create Variables
/////////////////////////////////////////////

// 1️⃣ Using var (old way - avoid in modern JS)
var name = "John"; // Can be re-declared & updated
console.log(name); // John

// 2️⃣ Using let (ES6 - modern way)
let age = 25; // Can be updated, but NOT re-declared in same scope
age = 30;
console.log(age); // 30

// 3️⃣ Using const (ES6 - best for fixed values)
const pi = 3.1415; // Cannot be re-assigned or re-declared
console.log(pi); // 3.1415

// const pi = 3.14; ❌ Error: Identifier 'pi' has already been declared
// pi = 3.14;       ❌ Error: Assignment to constant variable

/////////////////////////////////////////////
// 🔍 Variable Naming Rules (Identifiers)
/////////////////////////////////////////////

/*
✅ Must start with a letter, $, or _
✅ Can contain letters, numbers, $, _
❌ Cannot start with a number
❌ Cannot use reserved words (like if, let, var, etc.)
*/

// Valid examples:
let $dollar = 100;
let _underscore = "hi";
let userName = "Alice";

// Invalid examples (will throw error):
// let 1stName = "John"; ❌
// let var = 10;         ❌

// ✅ Use camelCase for variables in JS
let totalPrice = 250;
let userLoggedIn = true;

/////////////////////////////////////////////
// 🧠 Extra Tip: Declare multiple variables
/////////////////////////////////////////////

let x = 10,
  y = 20,
  z = 30;
console.log(x + y + z); // 60
