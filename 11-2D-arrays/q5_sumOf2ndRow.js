function sum(num) {
  let sum = 0;

  for (let j = 0; j < num[0].length; j++) {
    sum += num[1][j];
  }

  return sum;
}

let nums = [
  [1, 4, 9],
  [11, 4, 3],
  [2, 2, 3],
];

let ans = nums[1].reduce((a, b) => a + b);
console.log(ans);

console.log(sum(nums));
