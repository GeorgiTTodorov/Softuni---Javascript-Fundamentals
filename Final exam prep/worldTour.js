function worldTour(array) {
  let stops = array.shift();

  for (let el of array) {
    let [command, firstInput, secondInput] = el.split(":");

    if (command === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
      break;
    }

    switch (command) {
      case "Add Stop":
        let index = Number(firstInput);
        if (index < 0 || index >= stops.length) {
          console.log(stops);
          break;
        }
        let firstHalf = stops.slice(0, index);
        let secondHalf = stops.slice(index, stops.length);
        firstHalf += secondInput;
        stops = firstHalf + secondHalf;
        console.log(stops);
        break;
      case "Remove Stop":
        let startIndex = Number(firstInput);
        let endIndex = Number(secondInput);
        if (
          startIndex < 0 ||
          startIndex >= stops.length ||
          endIndex < 0 ||
          endIndex >= stops.length
        ) {
          console.log(stops);
          break;
        }
        let removed = stops.substring(startIndex, endIndex + 1);
        stops = stops.replace(removed, "");
        console.log(stops);
        break;
      case "Switch":
        let pattern = new RegExp(firstInput, "g");
        if (stops.includes(firstInput)) {
          stops = stops.replace(pattern, secondInput);
          console.log(stops);
        } else {
          console.log(stops);
          break;
        }
        break;
    }
  }
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
