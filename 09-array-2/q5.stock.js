let num = [7, 1, 5, 3, 6, 4],
  max = 0,
  profit = 0,
  buy = num[0];

for (let i = 1; i < num.length; i++) {
  if (buy < num[i]) {
    profit = num[i] - buy;
  } else {
    buy = num[i];
  }
  max = Math.max(profit, max);
}

console.log(max);
