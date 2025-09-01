function search(num, key) {
  let i = 0,
    j = num.length - 1;

  while (i < num.length && j >= 0) {
    if (num[i][j] === key) {
      return [i, j];
    } else if (num[i][j] > key) {
      j--;
    } else {
      i++;
    }
  }

  return [-1, -1];
}

function search2(num, key) {
  let row = num.length - 1,
    col = 0;

  while (col < num[0].length && row >= 0) {
    if (num[row][col] === key) {
      return [row, col];
    } else if (num[row][col] > key) {
      row--;
    } else {
      col++;
    }
  }

  return [-1, -1];
}

let num = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

console.log(search(num, 10));
console.log(search2(num, 10));
