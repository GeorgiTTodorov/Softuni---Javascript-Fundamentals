function piccolo(arr) {
  let parkingLot = new Set();

  for (const el of arr) {
    let [command, carNumber] = el.split(", ");

    if (command === "IN") {
      parkingLot.add(carNumber);
    } else {
      parkingLot.delete(carNumber);
    }
  }
  let sortedParking = Array.from(parkingLot).sort((a, b) => {
    return a.localeCompare(b);
  });

  if (sortedParking.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    for (const el of sortedParking) {
      console.log(el);
    }
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
