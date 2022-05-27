function printAndSum(start, finish) {

    let printLine = '';
    let sum = 0;

    for (let i = start; i <= finish; i++) {

        sum += i;

        if (i === finish) {
            printLine += `${i}`;
        } else {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)