let num = [2, 4, 6, 8, 10],
  sum = 0,
  max = Number.MIN_VALUE;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
  if (sum < 0) sum = 0;
  max = Math.max(max, sum);
}

console.log(max);
