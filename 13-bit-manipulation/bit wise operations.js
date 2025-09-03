// get ith bit
function getithBit(num, i) {
  return (num & (1 << i)) === 0 ? 0 : 1;
}

console.log(getithBit(10, 2)); // output: 0
console.log(getithBit(10, 1)); // output: 1
console.log(getithBit(10, 3)); // output: 1

// set ith bit
function setithBit(num, i) {
  return num | (1 << i);
}

console.log(setithBit(10, 2));

// clear ith bit
function clearithBit(num, i) {
  return num & (~1 << i);
}

console.log(clearithBit(10, 1));

// update ith bit
function updateithBit(num, i, newBit) {
  if (newBit == 0) return clearithBit(num, i);
  else if (newBit == 1) return setithBit(num, i);
  else return "no";
}

// clear last i bits
function clearLastiBits(num, i) {
  return num & (~0 << i);
}

console.log(clearLastiBits(15, 2));

// clear range of bits
function clearRangeOfBits(num, i, j) {
  let a = ~0 << (j + 1);
  let b = (1 << i) - 1;
  let bitMask = a | b;
  return num & bitMask;
}

console.log(clearRangeOfBits(10, 2, 4));
