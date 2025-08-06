function q4(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${num} `);
      num++;
    }
    console.log();
  }
}

q4(5);
