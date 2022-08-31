function starEnigma(arr) {
  let letters = /[star]/gi;
  let messageCount = Number(arr.shift());
  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let i = 0; i < messageCount; i++) {
    let encryptedMessage = arr[i];
    let countOfLetter = encryptedMessage.match(letters).length;
    let decryptedWord = "";

    for (let n = 0; n < encryptedMessage.length; n++) {
      let char = encryptedMessage.charCodeAt(n);
      let decryptedEl = char - countOfLetter;
      let str = String.fromCharCode(decryptedEl);
      decryptedWord += str;
    }
    let pattern =
      /(?<planetName>@[A-Z][a-z]+)[^@\-!:>]*(?<population>:\d+)[^@\-!:>]*(?<attackType>![A|D]!)[^@\-!:>]*(?<soldierCount>->\d+)/g;
    let typePattern = /![A-D]!/g;
    let planetName = /(?<planetName>@[A-Z][a-z]+)/g;

    let typeMatch = decryptedWord
      .match(typePattern)
      .join("")
      .split("!")
      .join("");
    let name = decryptedWord.match(planetName).join("").split("@").join("");
    let validPattern = decryptedWord.match(pattern);

    if (validPattern !== null) {
      if (typeMatch === "A") {
        attackedPlanets.push(name);
      } else {
        destroyedPlanets.push(name);
      }
    } else {
      continue;
    }
  }
  console.log(`Attacked planets: ${attackedPlanets.length}`);
  let sortedA = attackedPlanets.sort();
  sortedA.forEach((el) => console.log(`-> ${el}`));
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  let sortedB = destroyedPlanets.sort();
  sortedB.forEach((el) => console.log(`-> ${el}`));
}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
