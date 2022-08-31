function addressBook(array) {
  let addressInfo = {};

  for (const el of array) {
    let [name, address] = el.split(":");

    addressInfo[name] = address;
  }

  let sortedObj = Object.entries(addressInfo).sort(
    ([keyA], [keyB]) => {
      return keyA.localeCompare(keyB);
    }
  );

  for (const [name, address] of sortedObj) {
    console.log(`${name} -> ${address}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
