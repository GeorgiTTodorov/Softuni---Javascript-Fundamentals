function softUniBarIncome(input) {
  let pattern =
    /(?<name>%[A-Z][a-z]+%)[^$%|.\d]*(?<product><\w+>)[^$%|.\d]*(?<count>\|\d+\|)[^$%|.\d]*(?<price>[\d|d.]+\$)/g;

  let totalIncome = 0;
  let index = 0;
  let command = input[index];

  while (command !== "end of shift") {
    let validCustomer = pattern.exec(command);
    if (validCustomer === null) {
      index++;
      command = input[index];
      continue;
    }
    let customer = validCustomer.groups.name.split("%").join("");
    let item = validCustomer.groups.product.split("");
    item.shift();
    item.pop();
    item = item.join("");

    let quantity = Number(validCustomer.groups.count.split("|").join(""));
    let cost = Number(validCustomer.groups.price.split("$").join(""));
    console.log(`${customer}: ${item} - ${(quantity * cost).toFixed(2)}`);
    totalIncome += quantity * cost;

    validCustomer = pattern.exec(command);
    index++;
    command = input[index];
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// softUniBarIncome([
//   "%George%<Croissant>|2|10.3$",
//   "%Peter%<Gum>|1|1.3$",
//   "%Maria%<Cola>|1|2.4$",
//   "end of shift",
// ]);
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
