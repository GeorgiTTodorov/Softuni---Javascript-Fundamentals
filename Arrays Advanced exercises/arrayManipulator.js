function arrayManipulator(arrInt, arrStr) {
  let prototypeArr = arrInt.slice();
  let sumPairs = 0;

  for (let i = 0; i < arrStr.length; i++) {
    let [command, firstNum, secondNum] = arrStr[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "add":
        prototypeArr.splice(firstNum, 0, secondNum);
        break;
      case "addMany":
        let arrOfMany = arrStr[i].split(" ").map(Number);
        arrOfMany = arrOfMany.splice(2);
        prototypeArr.splice(firstNum, 0, ...arrOfMany);
        break;
      case "contains":
        if (prototypeArr.includes(firstNum)) {
          console.log(prototypeArr.indexOf(firstNum));
        } else {
          console.log(-1);
        }
        break;
      case "remove":
        prototypeArr.splice(firstNum, 1);
        break;
      case "shift":
        for (let j = 0; j < firstNum; j++) {
          let num = prototypeArr.shift();
          prototypeArr.push(num);
        }
        break;
      case "sumPairs":
        let pairsOfSumsNums = [];
        if (prototypeArr.length % 2 !== 0) {
            prototypeArr.push(0);
        }
        for (let i = 0; i < prototypeArr.length; i+=2) {
          sumPairs = prototypeArr[i] + prototypeArr[i + 1];
          pairsOfSumsNums.push(sumPairs)
        }
        prototypeArr = [...pairsOfSumsNums]
        break;
      case "print":
        console.log(`[ ${prototypeArr.join(", ")} ]`);
        return;
    }
  }
}

arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
