/*
===========================
📘 JavaScript Data Types
===========================

👉 JavaScript has **8 data types** (as of ES6):

🧠 JavaScript is **not a statically typed language**
- You don’t need to define the type of a variable
- Types are automatically assigned based on the value
- You can reassign a variable to a different type

1️⃣ Primitive Types:
   - Number
   - String
   - Boolean
   - Undefined
   - Null
   - Symbol (ES6)
   - BigInt (ES11)

2️⃣ Non-Primitive Type:
   - Object (including arrays, functions, etc.)

Example:
*/

let x = 5; // number
x = "Hello JS"; // string (no error!)
x = true; // boolean

console.log(typeof x); // boolean

//////////////////////////////////////////
// 1️⃣ Number
//////////////////////////////////////////

let age = 25;
let price = 99.99;
let rating = -4.5;

console.log(typeof age); // number

//////////////////////////////////////////
// 2️⃣ String
//////////////////////////////////////////

let name = "Alice";
let message = "Hello!";
let sentence = `My name is ${name}`; // Template literal

console.log(typeof name); // string

//////////////////////////////////////////
// 3️⃣ Boolean
//////////////////////////////////////////

let isLoggedIn = true;
let isPremiumUser = false;

console.log(typeof isLoggedIn); // boolean

//////////////////////////////////////////
// 4️⃣ Undefined
//////////////////////////////////////////

let y;
console.log(y); // undefined
console.log(typeof y); // undefined

//////////////////////////////////////////
// 5️⃣ Null
//////////////////////////////////////////

let data = null;
console.log(data); // null
console.log(typeof data); // ❗ object (this is a known JS bug)

//////////////////////////////////////////
// 6️⃣ Symbol (ES6)
//////////////////////////////////////////

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (unique values)

//////////////////////////////////////////
// 7️⃣ BigInt (for very large numbers)
//////////////////////////////////////////

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

//////////////////////////////////////////
// 8️⃣ Object (non-primitive)
//////////////////////////////////////////

// Object
let person = {
  name: "John",
  age: 30,
};

// Array
let numbers = [1, 2, 3, 4];

// Function
function greet() {
  return "Hi!";
}

console.log(typeof person); // object
console.log(typeof numbers); // object (array is a type of object)
console.log(typeof greet); // function (special object)

//////////////////////////////////////////
// 🧠 typeof Operator
//////////////////////////////////////////

/*
typeof is used to check the data type of a variable.
*/

console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object ❗
console.log(typeof []); // object (array)
console.log(typeof {}); // object (plain object)
console.log(typeof function () {}); // function

/*
===========================
📌 Summary Table
===========================

| Type       | Example              | typeof result |
|------------|----------------------|---------------|
| Number     | 42, 3.14             | "number"      |
| String     | "Hello", 'abc'       | "string"      |
| Boolean    | true, false          | "boolean"     |
| Undefined  | let x;               | "undefined"   |
| Null       | let x = null;        | "object" ❗    |
| Symbol     | Symbol("id")         | "symbol"      |
| BigInt     | 123n                 | "bigint"      |
| Object     | {}, [], function(){} | "object"/"function" |

*/
