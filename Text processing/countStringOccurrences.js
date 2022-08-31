function countStringOccurrences(text, word) {
     let count = 0;
     let arr = Array.from(text).join(' ');
    // let textArray = text.split(' ');

    // for (let el of textArray) {
    //     if (el === word) {
    //         count += 1;
    //     }
    // }
    // console.log(count);
    for (const key of arr) {
       console.log(key);
    }
        
}

countStringOccurrences('This is a word and it also is a sentence',
'is'
)