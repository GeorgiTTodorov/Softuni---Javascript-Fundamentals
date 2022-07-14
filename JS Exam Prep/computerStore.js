function computerStore(array) {
  let index = 0;
  let taxes = 0;
  let totalPrice = 0;
  let command = array[index];
  let priceWithoutTax = 0;

  while (command !== "special" && command !== "regular") {
    let price = Number(array[index]);
    index++;
    command = array[index];
    if (price <= 0) {
      console.log("Invalid price!");
    } else {
      taxes += price * 0.2;
      priceWithoutTax += price;
    }
  }
  if (command === "special") {
    totalPrice = priceWithoutTax + taxes - (priceWithoutTax + taxes) * 0.1;
  } else {
    totalPrice += priceWithoutTax + taxes;
  }

  if (totalPrice <= 0) {
    console.log("Invalid order!");
  } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
