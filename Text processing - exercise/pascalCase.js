function pascalCase(input) {
  let newStr = "";

  for (let letter of input) {
    if (letter === letter.toUpperCase()) {
      newStr += " " + letter;
    } else {
      newStr += letter;
    }
  }

  newStr = newStr.split(" ");
  newStr.shift();
  newStr = newStr.join(", ");

  console.log(newStr);
}

pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
