let sum = 0,
  max = Number.MIN_VALUE,
  arr = [2, 4, 6, 8, 10];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    sum = 0;
    for (let k = i; k <= j; k++) {
      sum += arr[k];
    }
  }
  max = Math.max(max, sum);
}

console.log(max);
