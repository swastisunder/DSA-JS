function palindrome(str) {
  let start = 0,
    end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) return false;
    else start++, end--;
  }

  return true;
}

let str = "racecar";

console.log(palindrome2(str));
