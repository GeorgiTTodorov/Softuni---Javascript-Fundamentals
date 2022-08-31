function heroRecruitment(input) {
  let heroes = new Map();

  for (let line of input) {
    if (line === "End") {
      console.log("Heroes: ");
      for (let el of heroes) {
        console.log(`== ${el[0]}: ${el[1].join(", ")}`);
      }
      break;
    }

    let [command, name, spell] = line.split(" ");
    if (command === "Enroll") {
      if (heroes.has(name)) {
        console.log(`${name} is already enrolled.`);
      } else {
        heroes.set(name, []);
      }
    } else if (command === "Learn") {
      if (!heroes.has(name)) {
        console.log(`${name} doesn't exist.`);
      } else {
        let heroe = heroes.get(name);
        if (heroe.includes(spell)) {
          console.log(`${name} has already learnt ${spell}.`);
        } else {
          let newValue = [spell];
          heroes.set(name, newValue);
        }
      }
    } else if (command === "Unlearn") {
      if (!heroes.has(name)) {
        console.log(`${name} doesn't exist.`);
      } else {
        let heroe = heroes.get(name);
        if (!heroe.includes(spell)) {
          console.log(`${name} doesn't know ${spell}.`);
        } else {
          let index = heroe.indexOf(spell);
          heroe.splice(index, 1);
          heroes.set(name, heroe);
        }
      }
    }
  }
}

// heroRecruitment((["Enroll Stefan",
// "Enroll Peter",
// "Enroll Stefan",
// "Learn Stefan ItShouldWork",
// "Learn John ItShouldNotWork",
// "Unlearn George Dispel",
// "Unlearn Stefan ItShouldWork",
// "End"])
// )
// heroRecruitment(["Enroll Stefan",
// "Learn Stefan ItShouldWork",
// "Learn Stefan ItShouldWork",
// "Unlearn Stefan NotFound",
// "End"]
// )
heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End",
]);
