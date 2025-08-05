function concatString(arr) {
  let str = "";
  for (const st of arr) {
    str += st;
  }
  return str;
}

console.log(concatString(["a", "b", "c"]));
