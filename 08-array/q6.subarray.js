function subarray(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      process.stdout.write(`[`);
      for (let k = i; k <= j; k++) {
        process.stdout.write(`${num[k]}`);
        if (k < j) process.stdout.write(`,`);
      }
      process.stdout.write(`] `);
    }
    console.log();
  }
}

console.log(subarray([2, 4, 6, 8, 10]));
