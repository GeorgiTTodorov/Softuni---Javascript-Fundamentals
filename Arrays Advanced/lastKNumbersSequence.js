function lastKNumbersSequence(n, k) {

    let sumOfElements = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        let numOfK = sumOfElements.slice(-k);

        for (let el of numOfK) {
            sum += el;   
        }
        sumOfElements.push(sum);
    }
    console.log(sumOfElements.join(' '));
}

lastKNumbersSequence(6, 3)