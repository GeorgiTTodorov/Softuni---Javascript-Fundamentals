function bombNumbers(array1, array2) {
  let bombNumber = array2[0];
  let power = array2[1];
  let sum = 0;
  let modifiedArray = array1.slice().map(Number);

  for (let i = 0; i < modifiedArray.length; i++) {
    if (modifiedArray[i] === bombNumber) {
      modifiedArray.splice(modifiedArray.indexOf(bombNumber) + 1, power);
      let indexToTheLeft = modifiedArray.indexOf(bombNumber) - power;
      modifiedArray.splice(indexToTheLeft, power);

      if (modifiedArray.includes(bombNumber)) {
        modifiedArray.splice(modifiedArray.indexOf(bombNumber), 1);
      }
    }
  }

  modifiedArray.forEach((el) => (sum += el));
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
