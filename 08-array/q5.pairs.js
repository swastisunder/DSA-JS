function pairs(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      process.stdout.write(`(${num[i]},${num[j]}) `);
    }
    console.log();
  }
}

pairs([2, 4, 6, 8, 10]);
