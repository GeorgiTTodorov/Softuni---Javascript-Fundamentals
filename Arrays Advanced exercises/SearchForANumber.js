function SearchForANumber(arr1, arr2) {
  let numberOfElements = arr2[0];
  let elementsToDelete = arr2[1];
  let specialNumber = arr2[2];
  let times = 0;

  let newArr = arr1.slice(0, numberOfElements);
  newArr.splice(0, elementsToDelete);
  // let includesNum = Number(newArr.includes(specialNumber));
  if (newArr.includes(specialNumber)) {
    for (const el of newArr) {
      if (el === specialNumber) {
        times++;
      }
    }
  }

  console.log(`Number ${specialNumber} occurs ${times} times.`);
}

SearchForANumber([7, 1, 5, 8], [3, 1, 5]);
