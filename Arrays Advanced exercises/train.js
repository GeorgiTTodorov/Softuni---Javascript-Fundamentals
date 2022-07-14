function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = +arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let input = arr[i].split(" ");
    if (input[0] === "Add") {
      wagons.push(Number(input[1]));
    } else {
      for (let n = 0; n < wagons.length; n++) {
        if (Number(input[0]) + wagons[n] <= maxCapacity) {
          wagons[n] += Number(input[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
