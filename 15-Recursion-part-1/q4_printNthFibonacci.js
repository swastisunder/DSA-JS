function printNthFibonacci(num) {
  if (num == 1 || num == 0) return num;

  return printNthFibonacci(num - 1) + printNthFibonacci(num - 2);
}

console.log(printNthFibonacci(10));
