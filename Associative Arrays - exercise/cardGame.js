function cardGame(arr) {
  let players = new Map();
  let cardPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardType = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (let line of arr) {
    let elements = line.split(": ");
    let name = elements.shift();
    let cardList = elements.join("").split(", ");

    if (!players.has(name)) {
      players.set(name, new Set());
    }
    for (const el of cardList) {
      players.get(name).add(el);
    }
  }
  for (const [name, value] of players) {
    let sum = 0;
    for (const card of value) {
      let cardEl = card.split("");
      let cardColor = cardEl.pop();
      let cardSum = cardEl.join("");

      let cardPowerValue = cardPower[cardSum] * cardType[cardColor];
      sum += cardPowerValue;
    }
    console.log(`${name}: ${sum}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
