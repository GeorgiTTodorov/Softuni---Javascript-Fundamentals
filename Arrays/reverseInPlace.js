function reverseInPlace(arr) {

    let n = arr.length - 1;
    let line = "";

    for (let i = n; i >= 0; i--) {
        line += `${arr[i]} `;
        
    }
    console.log(line);

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])