function q7(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= n; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

q7(5);
