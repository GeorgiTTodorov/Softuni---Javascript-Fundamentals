function gladiatorInventory(array) {
  let inventory = array[0].split(" ");

  for (let index = 0; index < array.length; index++) {
    let [command, item] = array[index].split(" ");

    switch (command) {
      case "Buy":
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case "Trash":
        if (inventory.includes(item)) {
          inventory.splice(inventory.indexOf(item), 1);
        }
        break;
      case "Repair":
        if (inventory.includes(item)) {
          let repairedItem = inventory.splice(inventory.indexOf(item), 1);
          inventory.push(repairedItem);
        }
      case "Upgrade":
        let [item1, upgrade1] = item.split("-");
        if (inventory.includes(item1)) {
          let upgradedEquipment = `${item1}:${upgrade1}`;
          inventory.splice(inventory.indexOf(item1) + 1, 0, upgradedEquipment);
        }
    }
  }

  console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);
