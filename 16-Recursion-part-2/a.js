/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (
  s,
  newStr = "",
  map = new Array(26),
  i = 0
) {
  if (i === s.length) {
    return newStr.split("").sort().join("");
  }

  if (map[s[i].charCodeAt(0) - 97] === true) {
    removeDuplicateLetters(s, newStr, map, i + 1);
  } else {
    map[s[i].charCodeAt(0) - 97] = true;
    removeDuplicateLetters(s, (newStr += s[i]), map, i + 1);
  }
};

console.log(removeDuplicateLetters("cbacdcbc"));
