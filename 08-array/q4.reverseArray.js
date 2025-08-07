function reverseArray(num) {
  let start = 0,
    end = num.length - 1;

  while (start < end) {
    [num[start], num[end]] = [num[end], num[start]];

    start++, end--;
  }

  return num;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
