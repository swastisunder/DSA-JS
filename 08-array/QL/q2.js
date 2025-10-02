// Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

function reverse(num) {
  let start = 0;
  end = num.length - 1;

  while (start <= end) {
    let temp = num[start];
    num[start] = num[end];
    num[end] = temp;
    start++, end--;
  }

  return num;
}

console.log(reverse([1, 2, 3, 4, 5]));
