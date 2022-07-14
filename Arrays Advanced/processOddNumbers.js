function processOddNumbers(arr) {

    let oddPositions = [];

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (i % 2 !== 0) {
            oddPositions.push(number * 2)
        }  
    }

    console.log(oddPositions.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25])