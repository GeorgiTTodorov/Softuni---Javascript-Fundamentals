function sumOddNum(count) {

    let n = 0;
    let i = 1;
    let totalSum = 0;

    while (n < count) {
        console.log(i);
        totalSum += i;
        i += 2;
        n++;
    }

    console.log(`Sum: ${totalSum}`);
}

sumOddNum(3);