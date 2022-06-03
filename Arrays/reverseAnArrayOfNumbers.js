function reverseAnArrayOfNumbers(n, arrNums) {
    let arr = [];
    let output = "";

    for (let i = 0; i < n; i++) {
        arr.push(arrNums[i]);
        }

    console.log(arr.reverse().join(" "));
              
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
