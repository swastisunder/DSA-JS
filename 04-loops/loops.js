// 🔁 LOOPS IN JAVASCRIPT

// ✅ 1. FOR LOOP
// ➤ Used when you know how many times to repeat
// ➤ Syntax: for(initialization; condition; increment/decrement)
console.log("👉 For Loop Example:");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
// Output: 1 2 3 4 5

// ✅ 2. WHILE LOOP
// ➤ Used when you don't know how many times, runs until condition is false
// ➤ Condition is checked before entering loop
console.log("\n👉 While Loop Example:");
let j = 1;
while (j <= 5) {
  console.log("While Count:", j);
  j++;
}
// Output: 1 2 3 4 5

// ✅ 3. DO...WHILE LOOP
// ➤ Runs at least once even if condition is false
// ➤ Condition is checked after running the loop body
console.log("\n👉 Do...While Loop Example:");
let k = 1;
do {
  console.log("Do-While Count:", k);
  k++;
} while (k <= 5);
// Output: 1 2 3 4 5

// ✅ 4. FOR...OF LOOP
// ➤ Used to loop over arrays or strings (iterables)
console.log("\n👉 For...of Loop with Array:");
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple banana cherry

console.log("\n👉 For...of Loop with String:");
const name = "JavaScript";
for (let char of name) {
  console.log(char);
}
// Output: J a v a S c r i p t

// ✅ 5. FOR...IN LOOP
// ➤ Used to loop over object keys
console.log("\n👉 For...in Loop with Object:");
const user = {
  name: "Swasti",
  age: 22,
  country: "India",
};
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output: name: Swasti, age: 22, country: India

// ✅ 6. BREAK STATEMENT
// ➤ Used to exit the loop early when a condition is met
console.log("\n👉 Break Example:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4

// ✅ 7. CONTINUE STATEMENT
// ➤ Used to skip one iteration when condition is met
console.log("\n👉 Continue Example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5
