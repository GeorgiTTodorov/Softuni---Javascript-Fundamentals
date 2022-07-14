function oddAndEvenSum(number) {

    let refine = number.toString();
    let arr = [];
    let sumOfOdd = 0;
    let sumOfEven = 0;
    
    for (let i = 0; i < refine.length; i++) {
        let el = refine[i];
        arr.push(Number(el))
        
    }
   
    for (let n = 0; n < arr.length; n++) {
        let num = arr[n];

        if (num % 2 === 0) {
            sumOfEven += num;
        } else {
            sumOfOdd += num;
        }
        
    }
        console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
}

oddAndEvenSum(1000435)