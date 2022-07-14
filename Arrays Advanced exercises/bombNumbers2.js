function bombNumbers2(array, arrayB) {
  let bombNumber = arrayB[0];
  let power = arrayB[1];
  let sum = 0;
  let numberOfElements = power + power + 1;
  let indexOf = array.indexOf(bombNumber);

  for (let index = 0; index < array.length; index++) {
    if (array[index] === bombNumber) {
      array.splice(indexOf - power, numberOfElements);
    }
  }
  array.forEach((el) => (sum += el));
  console.log(sum);
}

bombNumbers2([1, 7, 7, 1, 2, 3], [7, 1]);
