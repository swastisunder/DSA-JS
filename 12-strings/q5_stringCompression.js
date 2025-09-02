function compression(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      count++, i++;
    }
    newStr += str[i];
    if (count > 1) newStr += count;
  }

  return newStr;
}

console.log(compression("aabbcddffg"));
