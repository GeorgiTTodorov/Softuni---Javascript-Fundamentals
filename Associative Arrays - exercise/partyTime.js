function partyTime(arr) {
  let regularGuestList = [];
  let vipGuestList = [];
  let isParty = false;

  for (const guest of arr) {
    if (guest === "PARTY") {
      isParty = true;
      continue;
    }
      
      if (isParty) {
         if (vipGuestList.includes(guest)) {
              vipGuestList.splice(vipGuestList.indexOf(guest), 1);
         } else {
              regularGuestList.splice(regularGuestList.indexOf(guest), 1);
         }
      } else {
        if (guest[0] >= '0' && guest[0] <= '9') {
          vipGuestList.push(guest);
        } else {
          regularGuestList.push(guest);
        }
      }
  }       
        let numberOfPeople = regularGuestList.length + vipGuestList.length;
          console.log(numberOfPeople);
          
          for (const el of vipGuestList) {
              console.log(el);
          }
          for (const el of regularGuestList) {
              console.log(el);
          }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
