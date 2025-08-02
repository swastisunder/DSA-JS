// ✅ Conditional Statements in JavaScript

// ➤ Conditional statements help us make decisions in code based on certain conditions.

// -----------------------------------------------------
// 🔹 if-else Statement

let age = 20;

if (age >= 18) {
  console.log("You are an adult."); // if condition is true
} else {
  console.log("You are a minor."); // if condition is false
}

// -----------------------------------------------------
// 🔹 Nested if-else Statement

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// ➤ Explanation:
// - Multiple conditions checked one after another
// - Only the first true block runs

// -----------------------------------------------------
// 🔹 Ternary Operator (Shortcut for if-else)

let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult);

// ➤ Syntax: condition ? true_result : false_result

// -----------------------------------------------------
// 🔹 Switch Statement

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day"); // if no case matches
}

// ➤ Explanation:
// - Use switch when comparing a single value to many possible cases
// - `break` prevents fall-through (executing next cases)

// -----------------------------------------------------
// ✅ Summary:

// 1. if-else        → for single condition checks
// 2. nested if-else → for multiple condition levels
// 3. ternary        → short form of if-else (used in simple conditions)
// 4. switch         → useful when checking one value against many fixed options
