function fastExpo(a, n) {
  let ans = 1;
  while (n > 0) {
    if ((n & 1) != 0) ans = ans * a;
    a = a * a;
    n >>= 1;
  }
  return ans;
}

console.log(fastExpo(3, 5));
