// function diagonalSum(matrix) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       if (i === j) sum += matrix[i][j];
//       else if (i + j === matrix.length - 1) sum += matrix[i][j];
//     }
//   }

//   return sum;
// }

function diagonalSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
    if (i !== matrix.length - 1 - i) sum += matrix[i][matrix.length - 1 - i];
  }

  return sum;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(diagonalSum(matrix));
