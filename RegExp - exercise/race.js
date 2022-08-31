function race(arr) {
  let racers = arr.shift().split(", ");
  let racersInfo = new Map();

  racers.forEach((element) => {
    return racersInfo.set(element, 0);
  });

  let namePattern = /[A-Z[a-z]+/g;
  let distancePattern = /\d/g;

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    if (currentEl === "end of race") {
      break;
    }

    let nameMatch = currentEl.match(namePattern).join("");
    let distanceMatch = currentEl.match(distancePattern).reduce((a, b) => {
      return Number(a) + Number(b);
    });

    if (racersInfo.has(nameMatch)) {
      let oldValue = racersInfo.get(nameMatch);
      racersInfo.set(nameMatch, (oldValue += distanceMatch));
    }
  }

  let topThree = Array.from(racersInfo).sort(
    ([nameA, valueA], [nameB, valueB]) => {
      return valueB - valueA;
    }
  );

  topThree.pop();
  console.log(`1st place: ${topThree[0][0]}`);
  console.log(`2nd place: ${topThree[1][0]}`);
  console.log(`3rd place: ${topThree[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
