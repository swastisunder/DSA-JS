function firstLetterUppercase(str) {
  let newStr = "";
  newStr += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " " && str[i] !== " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  console.log(newStr);
}

firstLetterUppercase("hi i am a man");
