function sumFirstAndLast(arr) {

    let lastIndex = arr.length - 1;
    let first = Number(arr[0]);
    let last = Number(arr[lastIndex]);

    let sumFirstAndLast = first + last;

    console.log(sumFirstAndLast);

}

sumFirstAndLast(['5', '10'])