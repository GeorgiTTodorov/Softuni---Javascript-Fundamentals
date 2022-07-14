function buildAWall(array) {
  let arrayOfNums = array.map(Number);
  let finishedCrews = [];
  let totalConcreteUsed = [];
  let totalCost = 0;

  while (arrayOfNums.length !== 0) {
    if (arrayOfNums.includes(30)) {
      let num2 = arrayOfNums.splice(arrayOfNums.indexOf(30), 1);
      finishedCrews.push(num2);
      continue;
    }
    let concreteUsedPerDay = 0;
    for (let index = 0; index < arrayOfNums.length; index++) {
      let num = arrayOfNums[index];
      if (num !== 30) {
        arrayOfNums[index] += 1;
        concreteUsedPerDay += 195;
        totalCost += 1900 * 195;
      }
    }

    if (arrayOfNums.length !== 0) {
      totalConcreteUsed.push(concreteUsedPerDay);
    }
  }

  console.log(totalConcreteUsed.join(", "));
  console.log(`${totalCost} pesos`);
}

buildAWall([17, 22, 17, 19, 17]);
