/*
==============================
📘 How JavaScript Runs
==============================

👉 JavaScript is a **single-threaded**, **interpreted**, **non-blocking**, **asynchronous** language.

It runs using an **engine** (like V8 in Chrome, Node.js) that processes the code in a specific flow.

Let's understand how it works step-by-step:
*/

/////////////////////////////////////////////
// ✅ 1. JavaScript Engine
/////////////////////////////////////////////

/*
Every browser (Chrome, Firefox, etc.) has a JavaScript engine.

Examples:
- Chrome / Node.js → V8 Engine
- Firefox → SpiderMonkey
- Safari → JavaScriptCore

The engine does two main things:
1️⃣ Parsing (read and understand code)
2️⃣ Execution (run the code)

*/

// JavaScript code
let a = 10;
let b = 20;
console.log(a + b); // Engine runs this step-by-step

/////////////////////////////////////////////
// ✅ 2. Execution Steps (Simplified)
/////////////////////////////////////////////

/*
1️⃣ Code goes to the JavaScript engine
2️⃣ Code is parsed and converted to bytecode
3️⃣ Code runs line by line in two phases:

🔹 Phase 1: Memory Allocation (Creation Phase)
- JS scans the code
- Creates memory space for variables and functions (called "hoisting")

🔹 Phase 2: Execution
- JS runs the code line-by-line
- Assigns values, runs functions, etc.
*/

/////////////////////////////////////////////
// ✅ 3. Call Stack
/////////////////////////////////////////////

/*
JavaScript uses a "Call Stack" to keep track of function calls.

Think of it like a stack of plates:
- The top function runs first
- When it finishes, it is removed (popped)
*/

function greet() {
  console.log("Hello");
}
greet(); // Function goes on top of the call stack

/////////////////////////////////////////////
// ✅ 4. Web APIs + Callback Queue (Browser)
/////////////////////////////////////////////

/*
JS alone is synchronous, but browsers add **Web APIs** for:
- setTimeout
- DOM Events
- fetch()

These tasks run in the background and send their callbacks to the **callback queue**.

Then, JS checks if the **call stack is empty** using the **event loop**, and pushes the callback to run.
*/

setTimeout(() => {
  console.log("This runs later"); // goes to Web API → callback queue → back to call stack
}, 1000);

console.log("This runs first");

/*
Output:
This runs first
This runs later
*/

/////////////////////////////////////////////
// ✅ 5. Node.js (JS outside browser)
/////////////////////////////////////////////

/*
Node.js is a runtime that uses the V8 engine to run JS outside the browser.

It has its own APIs like:
- fs (file system)
- http
- events

So you can build backend servers using JavaScript.
*/

/////////////////////////////////////////////
// 📌 Summary
/////////////////////////////////////////////

/*
🧠 JavaScript Flow:

1. Code goes to JS Engine
2. Memory is allocated (hoisting)
3. Code executes line-by-line using Call Stack
4. Asynchronous code handled via:
   - Web APIs
   - Callback Queue
   - Event Loop
5. Output is printed (console, browser, etc.)
*/

