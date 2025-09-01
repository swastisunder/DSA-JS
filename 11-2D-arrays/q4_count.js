function count(num, key) {
  let count = 0;

  for (const n of num) {
    for (const el of n) {
      if (el === key) count++;
    }
  }

  return count;
}

function count2(num, key) {
  return num.flat().filter((x) => x === key).length;
}

let num = [
  [4, 7, 8],
  [8, 8, 7],
];

// console.log(count(num, 7));
console.log(count2(num, 7));
