function factorialDivision(a, b) {

    let factorialA = a;
    let factorialB = b;

    for (let i = 1; i < a; i++) {
        factorialA *= i;
    }

    for (let n = 1; n < b; n++) {
        factorialB *= n;
    }

    let sum = factorialA / factorialB;

    console.log(sum.toFixed(2));

}

factorialDivision(6,
    2
    )