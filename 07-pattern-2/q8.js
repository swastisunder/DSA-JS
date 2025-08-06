function q7(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= n; k++) {
      if (i == 1 || k == 1 || i == n || k == n) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

q7(5);
