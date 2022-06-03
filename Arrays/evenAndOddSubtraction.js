function evenAndOddSubtraction(arr) {
    let evenNum = 0;
    let oddNum = 0;

    for (let i = 0; i < arr.length; i++) {
        let tempNum = arr[i];

        if (tempNum % 2 === 0) {
            evenNum += tempNum;
        } else {
            oddNum += tempNum;
        }
        
    }

    console.log(evenNum - oddNum);

}

evenAndOddSubtraction([1,2,3,4,5,6])