let num = [5, 4, 2, 3, 1];
let count = [];

for (let i = 0; i <= Math.max(...num); i++) {
  count[i] = 0;
}

for (let i = 0; i < num.length; i++) {
  count[num[i]]++;
}

let j = 0;
for (let i = 0; i < count.length; i++) {
  while (count[i] > 0) {
    num[j] = i;
    j++;
    count[i]--;
  }
}

console.log(num);
