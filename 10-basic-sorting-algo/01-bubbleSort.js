let num = [9, 6, 3, 8, 5, 2, 7, 4, 1];
let swap = 0;

for (let i = 0; i < num.length - 1; i++) {
  if (swap < 0) break;
  for (let j = 0; j < num.length - i - 1; j++) {
    if (num[j] > num[j + 1]) {
      [num[j], num[j + 1]] = [num[j + 1], num[j]];
      console.log(`Swap:- ${swap}`);
      swap++;
    }
  }
}

console.log(num);
