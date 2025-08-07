function binarySearch(num, key) {
  let start = 0,
    end = num.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (num[mid] == key) {
      return mid;
    } else if (key < num[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
