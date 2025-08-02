// ✅ Income Tax Calculator

function calculateTax(income) {
  let tax;

  if (income < 500000) {
    tax = 0;
  } else if (income >= 500000 && income <= 1000000) {
    tax = income * 0.2;
  } else {
    tax = income * 0.3;
  }

  return tax;
}

// 🔽 Example Usage
let income = 850000; // Change this value to test other inputs
let taxAmount = calculateTax(income);

console.log("Income:", income);
console.log("Tax to be paid:", taxAmount);
