/*
==========================================
📘 STRINGS IN JAVASCRIPT
==========================================

1. What is a String?
- A string is a sequence of characters used to represent text.
- In JS, strings are written inside single (' '), double (" "), or backticks (` `).
*/

let str1 = "Hello"; // double quotes
let str2 = "World"; // single quotes
let str3 = `Hello World`; // template literals

/*
==========================================
2. Creating a String
==========================================
*/
let s1 = "JavaScript"; // string literal
let s2 = new String("JavaScript"); // String object (rarely used)

/*
==========================================
3. Length of a String
==========================================
*/
console.log("Length:", s1.length); // 10

/*
==========================================
4. String Index
- Strings are like arrays of characters (0-based index).
*/
console.log("First char:", s1[0]); // J
console.log("Last char:", s1[s1.length - 1]); // t

/*
==========================================
5. Concatenation
- Joining two strings together.
*/
let fullName = "Swasti" + "sunder";
console.log("Concatenated:", fullName);

// Using template literals
let age = 21;
console.log(`I am ${fullName} and I am ${age} years old.`);

/*
==========================================
6. charAt()
- Returns character at a given index.
*/
console.log("charAt(2):", s1.charAt(2)); // v

/*
==========================================
7. Compare Strings
- Using === (value + type)
*/
console.log("Compare:", "apple" === "apple"); // true
console.log("Compare:", "apple" === "Apple"); // false (case-sensitive)

/*
==========================================
8. substring()
- Extracts part of a string.
*/
let text = "JavaScript";
console.log(text.substring(0, 4)); // "Java"
console.log(text.substring(4, 10)); // "Script"

/*
==========================================
9. Strings are Immutable
- Once created, strings cannot be changed directly.
*/
let lang = "Java";
lang[0] = "M"; // ❌ No effect
console.log(lang); // "Java"

// Instead, you create a new string
lang = "M" + lang.substring(1);
console.log(lang); // "Mava"

/*
==========================================
10. compareTo()
- In Java, compareTo() returns:
   0 if equal
   >0 if first > second
   <0 if first < second
- In JS, we can simulate using localeCompare()
*/
console.log("apple".localeCompare("banana")); // -1 (apple < banana)
console.log("banana".localeCompare("apple")); // 1  (banana > apple)
console.log("apple".localeCompare("apple")); // 0  (equal)

/*
==========================================
📌 Summary
- Strings hold text data
- length, index, charAt, substring, concatenation
- Strings immutable → new strings created on modification
- localeCompare() works like compareTo()
==========================================
*/
