// ===============================
// 2D ARRAYS IN JAVASCRIPT
// ===============================

// 1. Creating 2D arrays
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// -------------------------------
// 2. Accessing elements
console.log("arr[2][0] =", arr[2][0]); // 7 (3rd row, 1st column)
console.log("Row count =", arr.length);
console.log("Column count =", arr[0].length);

// -------------------------------
// 3. Iteration
// Row-major order
console.log("Row-major iteration:");
for (let r = 0; r < arr.length; r++) {
  for (let c = 0; c < arr[r].length; c++) {
    process.stdout.write(arr[r][c] + " ");
  }
}
console.log("\n");

// Column-major order
console.log("Column-major iteration:");
for (let c = 0; c < cols; c++) {
  for (let r = 0; r < rows; r++) {
    process.stdout.write(arr[r][c] + " ");
  }
}
console.log("\n");
