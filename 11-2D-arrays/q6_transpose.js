function transpose(num) {
  let transpose = [];

  for (let j = 0; j < num[0].length; j++) {
    transpose[j] = new Array(num.length).fill(0);vcv
  }

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
      transpose[j][i] = num[i][j];
    }
  }

  return transpose;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(matrix));
