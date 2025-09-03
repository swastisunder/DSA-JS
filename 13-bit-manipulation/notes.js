/*
====================================================
📘 NUMBER SYSTEMS & BITWISE OPERATORS IN JAVASCRIPT
====================================================

1. Decimal Number System
- Base 10 (digits 0–9)
- Example: 157 = 1×10² + 5×10¹ + 7×10⁰

2. Binary Number System
- Base 2 (digits 0 and 1)
- Example: 101 = 1×2² + 0×2¹ + 1×2⁰ = 5

----------------------------------------------------
3. Decimal → Binary
----------------------------------------------------
Use toString(2)
*/
let dec = 10;
console.log("Decimal to Binary:", dec.toString(2)); // 1010

/*
----------------------------------------------------
4. Binary → Decimal
----------------------------------------------------
Use parseInt(str, 2)
*/
let bin = "1010";
console.log("Binary to Decimal:", parseInt(bin, 2)); // 10

/*
====================================================
📘 BITWISE OPERATORS
====================================================
Work on binary representation
----------------------------------------------------
Operators: & | ^ ~ << >>
====================================================
*/

/*
----------------------------------------------------
& (AND)
----------------------------------------------------
Truth Table:
0&0=0, 0&1=0, 1&0=0, 1&1=1
*/
console.log("5 & 6:", 5 & 6);
// 5 = 101, 6 = 110
// 101 & 110 = 100 (decimal 4)

/*
----------------------------------------------------
| (OR)
----------------------------------------------------
Truth Table:
0|0=0, 0|1=1, 1|0=1, 1|1=1
*/
console.log("5 | 6:", 5 | 6);
// 101 | 110 = 111 (decimal 7)

/*
----------------------------------------------------
^ (XOR)
----------------------------------------------------
Truth Table:
0^0=0, 0^1=1, 1^0=1, 1^1=0
*/
console.log("5 ^ 6:", 5 ^ 6);
// 101 ^ 110 = 011 (decimal 3)

/*
----------------------------------------------------
~ (NOT)
----------------------------------------------------
Flips all bits (1→0, 0→1)
Example: ~5
5 (decimal)  = 000...0101 (32-bit)
~5           = 111...1010 (32-bit two’s complement)
             = -6 in decimal

⚠️ Why ~5 != 2?
- Because JS stores numbers as 32-bit signed integers internally.
- ~x = -(x+1)

So:
~5 = -(5+1) = -6
~6 = -(6+1) = -7
*/
console.log("~5:", ~5);
console.log("~6:", ~6);

/*
----------------------------------------------------
MSB & LSB
----------------------------------------------------
- MSB = Most Significant Bit (leftmost bit)
- LSB = Least Significant Bit (rightmost bit)

In signed 32-bit integers:
- MSB = 0 → positive
- MSB = 1 → negative (stored in 2's complement)

2’s Complement:
1. Invert all bits
2. Add 1
= Negative representation of number
*/

/*
----------------------------------------------------
<< (Left Shift)
----------------------------------------------------
Shifts bits to the left, fills 0 on right.
Formula: a << b = a × (2^b)
*/
console.log("5 << 1:", 5 << 1); // 5*2^1 = 10
console.log("5 << 2:", 5 << 2); // 5*2^2 = 20

/*
----------------------------------------------------
>> (Right Shift)
----------------------------------------------------
Shifts bits to the right, fills with MSB (sign bit).
Formula: a >> b = floor(a / (2^b)) for positive numbers
*/
console.log("20 >> 1:", 20 >> 1); // 20/2 = 10
console.log("20 >> 2:", 20 >> 2); // 20/4 = 5

/*
====================================================
📌 Summary
====================================================
- Decimal → Binary: toString(2)
- Binary → Decimal: parseInt("101", 2)
- &  : AND (both 1 → 1)
- |  : OR (any 1 → 1)
- ^  : XOR (different → 1)
- ~  : NOT (flip bits, ~x = -(x+1))
- << : Left shift → multiply by 2^b
- >> : Right shift → divide by 2^b (sign preserved)
- MSB = sign bit (0=+, 1=-)
- LSB = last bit
- Negative stored in 2’s complement form
====================================================
*/
