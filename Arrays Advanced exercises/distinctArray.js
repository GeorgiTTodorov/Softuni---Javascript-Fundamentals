function distinctArray(arrayOfNumbers) {

    let modifiedArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (!modifiedArray.includes(arrayOfNumbers[i])) {
            modifiedArray.push(arrayOfNumbers[i]);
        }  
    }
        console.log(modifiedArray.join(' '));
 }

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])