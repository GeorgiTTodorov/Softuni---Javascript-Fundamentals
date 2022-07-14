function mergeArrays(arr1, arr2) {

    let mergedArr = [];
    let index = arr1.length;

    for (let i = 0; i < index; i++) {
        if (i % 2 === 0) {
            mergedArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            mergedArr[i] = arr1[i] + arr2[i];
        }
        
    }

        console.log(mergedArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)