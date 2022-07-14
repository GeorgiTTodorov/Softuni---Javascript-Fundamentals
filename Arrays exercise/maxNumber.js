function maxNumber(arr) {

    let newArr = [];
    let index = arr.length;

    for (let i = 0; i < index; i++) {
        let currentNum = arr[i];
        let isBigger = true;

        for (let n = i+1 ; n < index; n++) {
            let num = arr[n];
            
            if (num >= currentNum) {
                isBigger = false;
            }
            
        }
        if (isBigger) {
            newArr.push(currentNum);
        }
        
    }
        console.log(newArr.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17])