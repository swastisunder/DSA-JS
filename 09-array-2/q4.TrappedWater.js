let num = [4, 2, 0, 6, 3, 2, 5],
  width = 1,
  left = [],
  right = [],
  sum = 0;

left[0] = num[0];
for (let i = 1; i < num.length; i++) {
  left[i] = Math.max(left[i - 1], num[i]);
}

right[num.length - 1] = num[num.length - 1];
for (let i = num.length - 2; i >= 0; i--) {
  right[i] = Math.max(right[i + 1], num[i]);
}

for (let i = 0; i < num.length; i++) {
  sum += (Math.min(left[i], right[i]) - num[i]) * width;
}

console.log(sum);
