// ==============================
// 📘 JavaScript Arrays - Full Notes
// ==============================

// ✅ What is an Array?
// An array is a special variable that can hold multiple values in a single variable.

let fruits = ["apple", "banana", "orange"];
console.log(fruits); // ["apple", "banana", "orange"]

// ==============================
// ✅ Creating Arrays
// ==============================

let arr1 = [1, 2, 3]; // Using square brackets
let arr2 = new Array(4, 5, 6); // Using new keyword (less common)
let emptyArr = []; // Empty array

// ==============================
// ✅ Accessing Elements
// ==============================

console.log(arr1[0]); // 1 (index starts from 0)
console.log(arr1[2]); // 3
console.log(arr1[arr1.length - 1]); // Last element

// ==============================
// ✅ Changing Elements
// ==============================

arr1[0] = 100;
console.log(arr1); // [100, 2, 3]

// ==============================
// ✅ Array Length
// ==============================

console.log(fruits.length); // 3

// ==============================
// ✅ Looping Through Arrays
// ==============================

// 1. For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. For...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// 3. forEach() method
fruits.forEach(function (fruit, index) {
  console.log(index, fruit);
});

// ==============================
// ✅ Common Array Methods
// ==============================

// 🔸 push() - Add to end
fruits.push("grape"); // ["apple", "banana", "orange", "grape"]

// 🔸 pop() - Remove from end
fruits.pop(); // Removes "grape"

// 🔸 unshift() - Add to start
fruits.unshift("mango"); // ["mango", "apple", "banana", "orange"]

// 🔸 shift() - Remove from start
fruits.shift(); // Removes "mango"

// 🔸 indexOf() - Find index
console.log(fruits.indexOf("banana")); // 1

// 🔸 includes() - Check if element exists
console.log(fruits.includes("orange")); // true

// 🔸 slice(start, end) - Get part of array (does NOT change original)
let sliced = fruits.slice(1, 3); // ["banana", "orange"]

// 🔸 splice(start, deleteCount, ...items) - Add/Remove elements (changes array)
fruits.splice(1, 1, "kiwi"); // ["apple", "kiwi", "orange"]

// 🔸 reverse() - Reverses array (changes original)
let nums = [1, 2, 3];
nums.reverse(); // [3, 2, 1]

// 🔸 concat() - Merge arrays
let a = [1, 2],
  b = [3, 4];
let merged = a.concat(b); // [1, 2, 3, 4]

// 🔸 join() - Join elements into a string
console.log(fruits.join(", ")); // "apple, kiwi, orange"

// ==============================
// ✅ Multi-Dimensional Arrays
// ==============================

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matrix[0][1]); // 2

// ==============================
// ✅ Map, Filter, Reduce
// ==============================

let numbers = [1, 2, 3, 4, 5];

// 🔸 map() - returns new array after applying function
let doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]

// 🔸 filter() - returns new array with values that pass condition
let evens = numbers.filter((num) => num % 2 === 0); // [2, 4]

// 🔸 reduce() - reduces array to single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// ==============================
// ✅ Spread Operator with Arrays
// ==============================

let nums1 = [1, 2];
let nums2 = [...nums1, 3, 4]; // [1, 2, 3, 4]

// ==============================
// ✅ Destructuring Arrays
// ==============================

let [first, second] = fruits;
console.log(first); // apple
console.log(second); // kiwi

// ==============================
// ✅ Useful Tip: typeof array
// ==============================

// typeof fruits → returns 'object'
// To check if it's an array:
console.log(Array.isArray(fruits)); // true
