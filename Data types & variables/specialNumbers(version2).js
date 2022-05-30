function index(num) {
    
    for (let i = 1; i <= num; i++) {
        let stringNum = i.toString().split('');
        let number1 = Number(stringNum[0]);
        let sum = number1;
        
        if (i >= 10) {
            let number2 = Number(stringNum[1]);
            sum = number1 + number2;
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        
 
    }

   

}

index(20)