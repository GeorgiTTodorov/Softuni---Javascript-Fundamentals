function storeProvisions(arr1, arr2) {
  let inventory = {};

  for (let i = 0; i < arr1.length; i += 2) {
    let product = arr1[i];
    let count = Number(arr1[i + 1]);

    inventory[product] = count;
  }

  for (let n = 0; n < arr2.length; n += 2) {
    let product = arr2[n];

    if (!inventory.hasOwnProperty(product)) {
      inventory[product] = 0;
    }
    inventory[product] += Number(arr2[n + 1]);
  }

  for (const product in inventory) {
    console.log(`${product} -> ${inventory[product]}`);
  }
}

storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
