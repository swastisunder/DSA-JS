function q9(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

q9(5);
