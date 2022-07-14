function numbers(lineOfNumbers) {
  let arrNums = lineOfNumbers.split(" ").map(Number);
  let avgSum = 0;
  arrNums.forEach((el) => (avgSum += el));
  avgSum = avgSum / arrNums.length;

  arrNums = arrNums.filter((element) => element > avgSum).sort((a, b) => b - a);

  if (arrNums.length > 5) {
    let elementsToCut = arrNums.length - 5;
    arrNums.splice(5, elementsToCut);
  }

  if (arrNums.length > 0) {
    console.log(arrNums.join(" "));
  } else {
    console.log("No");
  }
}

numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
