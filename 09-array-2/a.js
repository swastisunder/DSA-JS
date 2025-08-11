let num = [7, 1, 5, 3, 6, 4],
  buy = num[0],
  profit = 0,
  max = Number.MIN_VALUE;

for (let i = 1; i < num.length; i++) {
  if (buy < num[i]) {
    profit = num[i] - buy;
  } else {
    buy = num[i];
  }
  max = Math.max(max, profit);
}

console.log(max);
