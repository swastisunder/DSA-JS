// *
// **
// ***
// ****
// *****

let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// ////////////////////////////////////

let j = 5;
for (let i = 1; i <= j; i++) {
  console.log("* ".repeat(i));
}
