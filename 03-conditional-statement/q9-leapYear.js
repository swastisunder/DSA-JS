const year = 2025;

if (year % 4 == 0) {
  if (year % 100) {
    if (year % 400 == 0) {
      console.log(" Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a Leap Year");
}
