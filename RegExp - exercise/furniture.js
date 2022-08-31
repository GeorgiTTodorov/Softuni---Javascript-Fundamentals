function furniture(arr) {
  let text = arr.join(" ");
  let products = [];
  let totalSum = 0;

  let pattern =
    /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;

  while ((validProduct = pattern.exec(text)) !== null) {
    let furnitureName = validProduct.groups.furniture;
    let furniturePrice = validProduct.groups.price;
    let funtitureQuantity = validProduct.groups.quantity;
    products.push(furnitureName);

    totalSum += funtitureQuantity * furniturePrice;
  }

  console.log("Bought furniture:");
  products.forEach((el) => console.log(el));
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
