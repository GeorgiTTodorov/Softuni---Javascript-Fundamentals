function smallestTwoNumbers(arr) {

    let sortAscendingOrder = arr.sort((a, b) => {
            return a - b;
    })

    let smallestNumbers = arr.slice(0, 2);
    console.log(smallestNumbers.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])