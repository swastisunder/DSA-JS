function sumOfNNaturalNum(num) {
  if (num == 1) return 1;
  return num + sumOfNNaturalNum(num - 1);
}

console.log(sumOfNNaturalNum(5));
