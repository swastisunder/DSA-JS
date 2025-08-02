// ✅ Operators in JavaScript

// ➤ What are operators?
// Symbols that tell the compiler to perform some operation on operands.

// Example:
const a = 10;
const b = 20;
const sum = a + b; // '+' is an operator, 'a' and 'b' are operands

// ------------------------------------------
// 🔢 1. Arithmetic Operators
const add = a + b; // Addition → 10 + 20 = 30
const subtract = a - b; // Subtraction → 10 - 20 = -10
const multiply = a * b; // Multiplication → 10 * 20 = 200
const divide = a / b; // Division → 10 / 20 = 0.5
const remainder = a % b; // Modulus → 10 % 20 = 10
const power = a ** 2; // Exponentiation → 10^2 = 100

// ------------------------------------------
// ➕ 2. Unary Operators (single operand)
let c = 5;
const postInc = c++; // Post-increment: returns 5, then c = 6
const preInc = ++c; // Pre-increment: c = 7, returns 7

let d = 5;
const postDec = d--; // Post-decrement: returns 5, then d = 4
const preDec = --d; // Pre-decrement: d = 3, returns 3

// ------------------------------------------
// 🧮 3. Relational / Comparison Operators
console.log(a == b); // false → equal (loose)
console.log(a === b); // false → equal (strict)
console.log(a != b); // true → not equal (loose)
console.log(a !== b); // true → not equal (strict)
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

// ------------------------------------------
// 🔗 4. Logical Operators
console.log(a > 5 && b < 30); // true → both are true
console.log(a < 5 || b > 15); // true → one is true
console.log(!(a < b)); // false → a < b is true, !true = false

// ------------------------------------------
// 📝 5. Assignment Operators
let x = 5;

x += 2; // x = x + 2 → 7
x -= 3; // x = x - 3 → 4
x *= 4; // x = x * 4 → 16
x /= 2; // x = x / 2 → 8
x %= 3; // x = x % 3 → 2
x **= 2; // x = x ** 2 → 4

// ------------------------------------------
// ✅ Summary:
// Arithmetic → +, -, *, /, %, **
// Unary → ++, --
// Relational → ==, ===, !=, !==, >, <, >=, <=
// Logical → &&, ||, !
// Assignment → =, +=, -=, *=, /=, %=, **=
