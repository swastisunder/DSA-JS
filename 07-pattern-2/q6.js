function q6(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`*`);
    }
    for (let k = 1; k < 2 * (n - i) + 1; k++) {
      process.stdout.write(` `);
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`*`);
    }
    console.log();
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`*`);
    }
    for (let k = 1; k < 2 * (n - i) + 1; k++) {
      process.stdout.write(` `);
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`*`);
    }
    console.log();
  }
}

q6(50);
