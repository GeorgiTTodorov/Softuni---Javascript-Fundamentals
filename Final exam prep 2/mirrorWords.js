function mirrorWords(arr) {
    // let hiddenWords = /([@|#])[A-z]{3,}(\1)+[A-z]{3,}(\1)+/g;
    let hiddenWords = /([@|#]{1})[A-Za-z]{3,}(\1)(\1)+[A-z]{3,}(\1)+/g;
    let mirrorWords = new Map();
    let text = arr.join('');

    let match = text.match(hiddenWords);

    if (match !== null) {
        if (match.length === 0) {
            console.log('No word pairs found!');
        } else {
            console.log(`${match.length} word pairs found!`);
        }
    


    for (let i = 0; i < match.length; i++) {
        let pair = match[i];

        if (pair.includes('#')) {
            let pairOfHash = pair.split('#').join(' ').trim().split(' ');
            let firstWord = pairOfHash.shift();
            let secondWord = pairOfHash.pop();
            let protorype = secondWord.split('').reverse().join('')

            if (firstWord === protorype) {
                mirrorWords.set(firstWord, secondWord);
            }

        } else {
            let pairOfAt = pair.split('@').join(' ').trim().split(' ');
            let first = pairOfAt.shift();
            let second = pairOfAt.pop();
            let protorypeX = second.split('').reverse().join('');
            if (first === protorypeX) {
                mirrorWords.set(first, second);
            }
        }
    }
    let words = ``;
    if (mirrorWords.size === 0) {
        console.log('No mirror words!');
    } else {
        for (let [first, second] of mirrorWords) {
            words += `${first} <=> ${second}, `;
        }
        words = words.slice(0, words.length - 2);
        console.log('The mirror words are:');
        console.log(words);
    }
} else {
    console.log('No word pairs found!');
    console.log('No mirror words!');
}

}

// mirrorWords([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]
// );
// console.log('---------------------');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])