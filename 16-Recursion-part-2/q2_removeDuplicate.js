function removeDuplicate(
  str,
  newStr = "",
  map = new Array(26).fill(false),
  i = 0
) {
  if (i === str.length) {
    return newStr;
  }

  if (map[str[i].charCodeAt(0) - 97] === true) {
    return removeDuplicate(str, newStr, map, i + 1);
  } else {
    map[str[i].charCodeAt(0) - 97] = true;
    return removeDuplicate(str, (newStr += str[i]), map, i + 1);
  }
}

console.log(removeDuplicate("cbacdcbc"));
