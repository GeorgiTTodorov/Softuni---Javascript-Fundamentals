function amazingNumbers(num) {

    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
        
    }

    let result = sum.toString()
    
    console.log(result.includes(9) ? `${num} Amazing? True` : `${num} Amazing? False` );
    
}

amazingNumbers(1233);