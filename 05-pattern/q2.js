// *****
// ****
// ***
// **
// *

let n = 5;
console.log("First way");

for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log("");
}

console.log("");
// /////////////////////////////
console.log("Second way");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

console.log("");
// /////////////////////////////
console.log("Third way");

for (let i = 1; i <= n; i++) {
  console.log("* ".repeat(n - i + 1));
}
