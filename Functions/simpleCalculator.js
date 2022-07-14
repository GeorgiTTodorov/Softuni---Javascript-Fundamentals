function simpleCalculator(num1, num2, operator) {

    let multiP = num1 * num2;
    let divI = num1 / num2;
    let adD = num1 + num2;
    let subTr = num1 - num2;

    if (operator === 'multiply') {
        console.log(multiP);
    } else if (operator === 'divide') {
        console.log(divI);
    } else if (operator === 'add') {
        console.log(adD);
    } else {
        console.log(subTr);
    }

}

simpleCalculator(5, 5, "multiply");
