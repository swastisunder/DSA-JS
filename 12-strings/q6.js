// Count how many times lowercase vowels occurred in a String entered by the user;

function count(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(count("aaeiouAeiobghu"));
