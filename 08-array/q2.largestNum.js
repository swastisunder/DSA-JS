function largestNum(num) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < num.length; i++) {
    max = Math.max(num[i], max);
  }
  return max;
}

function smallestNum(num) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < num.length; i++) {
    min = Math.min(num[i], min);
  }
  return min;
}

let num = [1, 2, 3, 4, 5];

console.log(largestNum(num));
console.log(smallestNum(num));

// ///////////////////////////////

console.log(Math.max(...num));
console.log(Math.min(...num));
