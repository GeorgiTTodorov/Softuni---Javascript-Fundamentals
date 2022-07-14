function angryCat(array, entryPoint, priceRating) {
  let sumOfItemsLeft = 0;
  let sumOfItemsRight = 0;

  for (let i = entryPoint; i > 0; i--) {
    let item = array[i - 1];
    let numEntry = array[entryPoint];
    if (priceRating === "cheap" && item < numEntry) {
      sumOfItemsLeft += item;
    } else if (priceRating === "expensive" && item >= numEntry) {
      sumOfItemsLeft += item;
    }
  }
  for (let n = entryPoint; n < array.length; n++) {
    let item2 = array[n + 1];
    let numEntry = array[entryPoint];
    if (priceRating === "cheap" && item2 < numEntry) {
      sumOfItemsRight += item2;
    } else if (priceRating === "expensive" && item2 >= numEntry) {
      sumOfItemsRight += item2;
    }
  }
  if (sumOfItemsLeft >= sumOfItemsRight) {
    console.log(`Left - ${sumOfItemsLeft}`);
  } else if (sumOfItemsRight > sumOfItemsLeft) {
    console.log(`Right - ${sumOfItemsRight}`);
  }
}

angryCat([1, 5, 1],
    1,
    "cheap")
    ;
