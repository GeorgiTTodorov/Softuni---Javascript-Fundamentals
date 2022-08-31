function sofiaPhoneNum(number) {
  let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g;
  let validNumbers = [];
  let num = number[0];
  let match = pattern.exec(num);

  while (match !== null) {
    validNumbers.push(match[0]);

    match = pattern.exec(num);
  }

  console.log(validNumbers.join(", "));
}

sofiaPhoneNum([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
