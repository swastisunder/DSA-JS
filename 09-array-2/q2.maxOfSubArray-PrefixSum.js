let num = [2, 4, 6, 8, 10],
  sum = 0,
  pre = [],
  max = Number.MIN_VALUE;

pre[0] = num[0];
for (let i = 1; i < num.length; i++) {
  pre[i] = num[i] + pre[i - 1];
}

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    sum = i === 0 ? pre[j] : pre[j] - pre[i - 1];
  }
  max = Math.max(sum, max);
}

console.log(max);
