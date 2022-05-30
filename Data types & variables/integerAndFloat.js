function integerAndFloat (num1, num2, num3) {
       
    let sum = num1 + num2 + num3;

    let result = sum % 1;
   
    console.log(result % 1 === 0 ? sum += ' - Integer' : sum += ' - Float');

}

integerAndFloat(100, 200, 303)