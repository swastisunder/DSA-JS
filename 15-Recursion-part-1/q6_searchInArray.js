function firstOcc(num, key, i = 0) {
  if (i === num.length) return "Not found";
  if (num[i] === key) return `${key} is at ${i}th position`;
  return search(num, key, i + 1);
}

function lastOccu(num, key, i = num.length - 1) {
  if (i < 0) return "Not found";
  if (num[i] === key) return `${key} is at ${i}th position`;
  return lastOccu(num, key, i - 1);
}

console.log(firstOcc([1, 2, 3, 4, 5, 6, 7, 8], 1));
console.log(lastOccu([1, 2, 3, 4, 5, 6, 7, 8], 1));
