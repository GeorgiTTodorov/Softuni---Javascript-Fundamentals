function nxNMatrix(num) {

    let matrix = [];

    for (let i = 0; i < num; i++) {
        let arr = [];

        for (let n = 0; n < num; n++) {
            arr.push(num);
        }
        matrix.push(arr.join(' '));

    }
    console.log(matrix.join('\n'));
}

nxNMatrix(3)