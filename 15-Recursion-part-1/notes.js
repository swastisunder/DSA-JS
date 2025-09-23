/*
===========================================
📘 RECURSION IN JAVASCRIPT
===========================================

👉 Definition:
Recursion is a programming technique where a function
calls itself to solve a smaller version of the problem.

Example: Factorial, Fibonacci, Tree Traversal, etc.
*/

/////////////////////////////////////////////
// ✅ 3 Steps of Recursion
/////////////////////////////////////////////

/*
1. Base Case:
   - Condition that stops recursion
   - Prevents infinite calls

2. Work:
   - The logic/calculation done at each step

3. Recursive Call:
   - Function calls itself with smaller/simpler input
*/

function factorial(n) {
  // 1. Base Case
  if (n === 0) return 1;

  // 2. Work (multiply with smaller factorial)
  // 3. Recursive Call
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));
// Steps: 5*4*3*2*1 = 120

/////////////////////////////////////////////
// ✅ Example: Fibonacci
/////////////////////////////////////////////

function fibonacci(n) {
  if (n <= 1) return n; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Work + Recursive calls
}

console.log("Fibonacci(6):", fibonacci(6)); // 8

/*
===========================================
📌 Stack Overflow in Recursion
===========================================

👉 Stack Overflow happens when:
1. Large Data Input:
   - Recursion depth grows too large for call stack
   - Example: factorial(100000) will crash

2. Excessive Recursion (no base case):
   - Infinite recursion → stack memory filled
*/

function infiniteRecursion() {
  console.log("Calling...");
  infiniteRecursion(); // ❌ No base case → crash
}

// infiniteRecursion(); // Uncomment to test → Stack Overflow

/*
===========================================
📌 Key Notes
===========================================

- Recursion = function calling itself
- Needs Base Case to stop
- Useful for problems with repeated substructure
- Too much recursion → Stack Overflow
- Iteration is sometimes safer for very large inputs
*/
