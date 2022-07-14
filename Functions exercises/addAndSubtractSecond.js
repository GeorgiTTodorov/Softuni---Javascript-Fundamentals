function addAndSubtractSecond(x, y, z) {

    let sumOfTwoNums = add( x, y);

    console.log(subtract(sumOfTwoNums, z));

    function add (x, y) {
        return x + y;
    }

    function subtract (sumOfTwoNums, z) {
            return sumOfTwoNums - z;
    }
}

addAndSubtractSecond(23,
    6,
    10
    )