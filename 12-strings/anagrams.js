// Determine if 2 Strings are anagrams of each other.What are anagrams?

function anagrams(str1, str2) {
  str1 = str1.replace(/\s+/g, "");
  str2 = str2.replace(/\s+/g, "");

  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagrams("race", "care"));
