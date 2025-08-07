function linearSearch(num, key) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === key) return i;
  }
  return -1;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(linearSearch(num, 5));

// ////////////////////////////////////////////

console.log(num.indexOf(5));
