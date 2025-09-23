function printNumDesc(num) {
  if (num == 1) {
    console.log(num);
    return;
  }
  console.log(num);
  printNumDesc(num - 1);
}

function printNumInc(num) {
  if (num == 1) {
    console.log(num);
    return;
  }
  printNumDesc(num - 1);
  console.log(num);
}

console.log("Printing in Descending Order:");
printNumDesc(5);
console.log("Printing in Ascending Order:");
printNumInc(5);
