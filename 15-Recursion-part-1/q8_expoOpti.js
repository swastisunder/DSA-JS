function expo(num, pow) {
  if (pow === 0) return 1;
  if (pow % 2 === 0)
    return expo(num, Math.floor(pow / 2)) * expo(num, Math.floor(pow / 2));
  else
    return (
      num * expo(num, Math.floor(pow / 2)) * expo(num, Math.floor(pow / 2))
    );
}

console.log(expo(5, 2));
console.log(expo(6, 2));
