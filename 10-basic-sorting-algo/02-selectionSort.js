let num = [9, 6, 3, 8, 5, 2, 7, 4, 1];
let min,
  swap = 0;

for (let i = 0; i < num.length; i++) {
  if (swap < 0) break;
  min = i;
  for (let j = i + 1; j < num.length; j++) {
    if (num[min] > num[j]) {
      min = j;
    }
  }
  console.log(`Swap:- ${swap}`);
  swap++;
  [num[min], num[i]] = [num[i], num[min]];
}

console.log(num);
