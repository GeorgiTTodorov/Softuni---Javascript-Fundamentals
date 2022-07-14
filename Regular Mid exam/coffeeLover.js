function coffeeLover(array) {
  let coffeesArray = array[0].split(" ");
  let numOfCommands = Number(array[1]);

  for (let i = 2; i < array.length; i++) {
    const element = array[i].split(" ");
    let command = element[0];

    switch (command) {
      case "Include":
        coffeesArray.push(element[1]);
        break;
      case "Remove":
        let firstOrLast = element[1];
        let numOfCoffees = Number(element[2]);
        if (coffeesArray.length < numOfCoffees) {
          break;
        } else {
          if (firstOrLast === "first") {
            coffeesArray.splice(0, numOfCoffees);
          } else {
            let length = coffeesArray.length - numOfCoffees;
            coffeesArray.splice(length, numOfCoffees);
          }
        }
        break;
      case "Prefer":
        let coffee1Index = Number(element[1]);
        let coffee2Index = Number(element[2]);
        if (
          coffeesArray.length >= coffee1Index &&
          coffeesArray.length >= coffee2Index
        ) {
          //   let coffee1 = coffeesArray.splice(coffee1Index, 1);
          //   let coffee2 = coffeesArray.splice(coffee2Index, 1);

          let el = coffeesArray.splice(
            coffee1Index,
            1,
            coffeesArray[coffee2Index]
          );
          coffeesArray.splice(coffee2Index, 1, el);
        } else {
          break;
        }
        break;

      case "Reverse":
        coffeesArray = coffeesArray.reverse();
    }
  }
  console.log("Coffees:");
  console.log(coffeesArray.join(" "));
}

coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"]);

