function shortestPath(str) {
  str = str.toLowerCase();
  let start_x = 0,
    start_y = 0,
    x = 0,
    y = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "n") {
      y++;
    } else if (str[i] === "e") {
      x++;
    } else if (str[i] === "s") {
      y--;
    } else if (str[i] === "w") {
      x--;
    }
  }

  return Math.sqrt(
    (x - start_x) * (x - start_x) + (y - start_y) * (y - start_y)
  );
}

let str = "wneenesennn";
console.log(shortestPath(str));
