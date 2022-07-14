function addAndSubtract (arr) {

    let modifiedArr = [];
    let sumOfOriginalArr = 0;
    let sumOfModifiedArr = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        let tempNum = Number(arr[i]);

        if (tempNum % 2 === 0) {
            tempNum += i;
        } else {
            tempNum -= i;
        }

        modifiedArr.push(tempNum);
        sumOfOriginalArr += tempNum;
        sumOfModifiedArr += arr[i];
    }

    console.log(modifiedArr);
    console.log(sumOfModifiedArr);
    console.log(sumOfOriginalArr);
}

addAndSubtract([-5, 11, 3, 0, 2])