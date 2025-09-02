function largestString(arr) {
  let large = arr[0];
  for (const el of arr) {
    if (el > large) {
      large = el;
    }
  }
  return large;
}

console.log(largestString(["aa", "ab"])); // ab
