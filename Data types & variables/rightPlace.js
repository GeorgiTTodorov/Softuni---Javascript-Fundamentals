function rightPlace(string1, char, string2) {

  let result = "";

  for (let i = 0; i < string1.length; i++) {
    let currentChar = string1[i];

    if (currentChar === "_") {
      result += char;
    } else {
      result += currentChar;
    }
  }

  if (result === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }

}

rightPlace('Str_ng', 'i', 'String');
