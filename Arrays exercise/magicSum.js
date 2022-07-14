function magicSum(arr, number) {
  let magicArray = [];

  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for (let n = i + 1; n < arr.length; n++) {
      let num2 = arr[n];
      let sum = num1 + num2;
      if (sum === number) {
        magicArray.push(`${num1} ${num2}`);
      }
    }
  }
  console.log(magicArray.join("\n"));
}

magicSum([1, 7, 6, 2, 19, 23], 8);
