function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let currentNum = i;
    let sumOfAllDigits = 0;

    if (currentNum >= 10) {
      currentNum = i.toString().split("");
      sumOfAllDigits = Number(currentNum[0]) + Number(currentNum[1]);
    } else {
      sumOfAllDigits = Number(currentNum);
    }

    if (sumOfAllDigits === 5 || sumOfAllDigits === 7 || sumOfAllDigits === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
