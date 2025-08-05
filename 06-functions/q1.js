function rollDice(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

console.log(rollDice(1, 3));
