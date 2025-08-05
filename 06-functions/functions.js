// 🔧 FUNCTIONS IN JAVASCRIPT

// ✅ What is a Function?
// A function is a reusable block of code that performs a specific task.
// Functions help to avoid repetition and make code modular and easier to manage.

// 🔹 Syntax of a function:
// function functionName(parameters) {
//     // code to execute
//     return value;
// }

// =============================================
// ✅ 1. FUNCTION DECLARATION / NAMED FUNCTION
// =============================================
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Swasti")); // Output: Hello, Swasti!

// ✅ Use: Best for defining reusable and named logic blocks.

// ================================
// ✅ 2. FUNCTION EXPRESSION
// ================================
// Assigning a function to a variable
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4)); // Output: 7

// ✅ Use: You can pass these like variables and use in callbacks.

// ================================
// ✅ 3. ARROW FUNCTION (ES6)
// ================================
// Shorter syntax for function expressions
const multiply = (x, y) => x * y;
console.log(multiply(5, 6)); // Output: 30

// If only one parameter, you can skip ()
// If only one line, it returns automatically
const square = (n) => n * n;
console.log(square(4)); // Output: 16

// ✅ Use: Great for short functions and callbacks. Doesn’t bind its own `this`.

// =====================================================
// ✅ 5. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// =====================================================
// Function that runs immediately after being defined
(function () {
  console.log("IIFE runs immediately!");
})();

// ✅ Use: To avoid polluting global scope (especially in older JS).

// ========================================
// ✅ 6. FUNCTION WITH DEFAULT PARAMETERS
// ========================================
function sayHello(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(sayHello()); // Output: Hello, Guest

// ✅ Use: When you want default values if no argument is passed

// ================================
// ✅ 9. HIGHER ORDER FUNCTION
// ================================
// A function that takes another function as argument or returns a function
function higherOrder(fn) {
  console.log("Inside higher order function");
  fn();
}
higherOrder(() => console.log("Callback inside HOF"));

// ✅ Use: Functional programming, map/filter/reduce, middleware, etc.
