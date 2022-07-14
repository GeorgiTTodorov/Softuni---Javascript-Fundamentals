function equalSums(arr) {

    let index = arr.length;
    let numsToTheLeft = 0;
    let isEqual = false;

    for (let i = 0; i < index; i++) {
        let currentElement = arr[i];
        let numsToTheRight = 0;


        for (let j = index - 1; j > i; j--) {
            numsToTheRight += Number(arr[j]);

        }
        if (numsToTheLeft === numsToTheRight) {
            isEqual = true;
            console.log(i);
        }
        numsToTheLeft += currentElement;
    }

    if (!isEqual) {
        console.log('no');
    }


}



equalSums([1])