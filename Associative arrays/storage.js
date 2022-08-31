function storage(array) {
  let inventory = new Map();

  for (const el of array) {
    let [key, value] = el.split(" ");

    let trueValue = Number(value);

    if (inventory.has(key)) {
      let oldValue = inventory.get(key);
      let newValue = oldValue + trueValue;
      inventory.set(key, newValue);
    } else {
      inventory.set(key, trueValue);
    }
  }
  for (const [product, quantity] of inventory) {
    console.log(`${product} -> ${quantity}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
