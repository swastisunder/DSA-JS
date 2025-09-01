function sprial(matrix) {
  let startRow = 0,
    startCol = 0,
    endRow = matrix.length - 1,
    endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top
    for (let i = startCol; i <= endCol; i++) {
      process.stdout.write(matrix[startRow][i] + " ");
    }

    // right
    for (let i = startRow + 1; i <= endRow; i++) {
      process.stdout.write(matrix[i][endCol] + " ");
    }

    // bottom
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break;
      process.stdout.write(matrix[endRow][i] + " ");
    }

    // right
    for (let i = endRow - 1; i >= startRow + 1; i--) {
      if (startCol === endCol) break;
      process.stdout.write(matrix[i][startCol] + " ");
    }

    startRow++, startCol++, endRow--, endCol--;
  }
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

sprial(matrix);
