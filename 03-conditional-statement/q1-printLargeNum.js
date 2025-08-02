let a = 10,
  b = 30;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("b is greater than a");
} else {
  console.log("a is equal to b");
}

let largeNum = a > b ? a : b;
console.log("The larger number is 'a': " + largeNum);
