function isSorted(num, i = 0) {
  if (i === num.length - 1) return true;
  if (num[i] > num[i + 1]) return false;
  return isSorted(num, i + 1);
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 2, 1, 2, 5]));
