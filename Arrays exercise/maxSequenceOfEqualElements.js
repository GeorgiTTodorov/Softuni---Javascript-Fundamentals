function maxSequenceOfEqualElements(arr) {
    let maxSequence = [];
    

   for (i = 0; i < arr.length; i++ ) {
        let currentNum = arr[i];
        let currentSequence = [];
        
        for (let n = i; n < arr.length; n++) {
            let nextNum = arr[n];

            if (currentNum === nextNum) {
                currentSequence.push(currentNum);
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }

}
        console.log(maxSequence.join(' '));
}



maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])