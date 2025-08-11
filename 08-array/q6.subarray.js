function subarray(num) {
  let max = Number.MIN_VALUE,
    min = Number.MAX_VALUE,
    total = 0,
    sum = 0;

  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      process.stdout.write(`[`);
      for (let k = i; k <= j; k++) {
        process.stdout.write(`${num[k]}`);
        if (k < j) process.stdout.write(`,`);
        sum += num[k];
      }
      process.stdout.write(`] `);
      total++;
      max = Math.max(max, sum);
      min = Math.min(min, sum);
      sum = 0;
    }
    console.log();
  }

  console.log(total);
  console.log(max);
  console.log(min);
}

console.log(subarray([2, 4, 6, 8, 10]));
