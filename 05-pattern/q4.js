// A
// BC
// DEF
// GHIJ
// KLMNO

let n = 5;
let a = 65;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(a) + " ");
    a++;
  }
  console.log();
}
