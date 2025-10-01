function tiling(n) {
  if (n == 0 || n == 1) return 1;
  return tiling(n - 1) + tiling(n - 2);
}

console.log(tiling(4));
