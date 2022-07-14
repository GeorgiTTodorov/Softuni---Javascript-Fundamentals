function palindromeIntegers(arr) {

    for (const el of arr) {

        let currentElement = String(el);
        let reversedElement = String(el).split('').reverse().join('');

        if (currentElement === reversedElement) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

palindromeIntegers([123, 323, 421, 121])