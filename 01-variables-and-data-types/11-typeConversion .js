/*
===========================
📘 Type Conversion in JavaScript
===========================

👉 JavaScript is a dynamically typed language.  
It allows automatic (implicit) and manual (explicit) conversion between data types.

There are two types of conversions:

1️⃣ Implicit Conversion (Type Coercion)  
2️⃣ Explicit Conversion (Manual)
*/

//////////////////////////////////////////
// 1️⃣ Implicit Conversion
//////////////////////////////////////////

// JS automatically converts data types when needed

console.log("5" + 2); // "52" (number → string)
console.log("5" - 2); // 3   (string → number)
console.log("10" * "2"); // 20 (string → number)

console.log(true + 1); // 2   (true → 1)
console.log(false + 1); // 1   (false → 0)

console.log(null + 5); // 5   (null → 0)
console.log(undefined + 1); // NaN

/*
⚠️ JS does weird things sometimes due to coercion
*/

console.log("5" + true); // "5true"
console.log("5" - true); // 4

//////////////////////////////////////////
// 2️⃣ Explicit Conversion
//////////////////////////////////////////

// ✅ Convert to Number
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

// ✅ Convert to String
console.log(String(123)); // "123"
console.log((456).toString()); // "456"

// ✅ Convert to Boolean
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("text")); // true

//////////////////////////////////////////
// 🧠 Common Use Cases
//////////////////////////////////////////

let age = "25";
let total = Number(age) + 5;
console.log(total); // 30

let n = 100;
console.log("Your score is " + String(n)); // "Your score is 100"

//////////////////////////////////////////
// 📌 Truthy vs Falsy Values (for Boolean)
//////////////////////////////////////////

// ✅ Falsy values (convert to false)
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// ✅ All other values are Truthy
console.log(Boolean("Hello")); // true
console.log(Boolean(123)); // true
