let num = [9, 6, 3, 8, 5, 2, 7, 4, 1];

for (let i = 1; i < num.length; i++) {
  let curValue = num[i]; // store the element to insert
  let prev = i - 1;

  while (prev >= 0 && num[prev] > curValue) {
    num[prev + 1] = num[prev]; // shift right
    prev--;
  }
  num[prev + 1] = curValue; // insert element at correct position
}

console.log(num);
