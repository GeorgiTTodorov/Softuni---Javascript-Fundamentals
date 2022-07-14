function treasureHunt(array) {
  let treasureChest = array[0].split("|");

  for (let index = 0; index < array.length; index++) {
    let currentArr = array[index].split(" ");
    let command = currentArr[0];

    if (command === "Yohoho!") {
      break;
    }

    switch (command) {
      case "Loot":
        for (let i = 1; i < currentArr.length; i++) {
          if (!treasureChest.includes(currentArr[i])) {
            treasureChest.unshift(currentArr[i]);
          }
        }
        break;
      case "Drop":
        let itemIndex = Number(currentArr[1]);
        if (treasureChest.length >= itemIndex && itemIndex >= 0) {
          let item = treasureChest.splice(itemIndex, 1);
          treasureChest.push(item);
        }
        break;
      case "Steal":
        let stolenItems;
        if (treasureChest.length < currentArr[1]) {
          stolenItems = treasureChest.splice(0, treasureChest.length);
        } else {
          stolenItems = treasureChest.splice(
            treasureChest.length - currentArr[1],
            currentArr[1]
          );
        }

        console.log(stolenItems.join(", "));
    }
  }

  if (treasureChest.length === 0) {
    console.log("Failed treasure hunt.");
  } else {
    let sumLength = 0;
    treasureChest.forEach((element) => (sumLength += element.length));
    let averageGain = sumLength / treasureChest.length;
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  }
}

treasureHunt([
  "Diamonds|Silver|Shotgun",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
