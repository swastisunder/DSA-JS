function expo(num, pow) {
  if (pow == 0) return 1;
  return num * expo(num, pow - 1);
}

console.log(expo(5, 2));
console.log(expo(6, 2));
