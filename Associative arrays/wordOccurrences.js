function wordOccurrences(arr) {

    let words = new Map();

    for (const el of arr) {

        if (!words.has(el)) {
            let count = 1;
            words.set(el, count)
        } else {
            let count = words.get(el);
            words.set(el, count += 1)
        }
    }
        let sortedWords = Array.from(words).sort(([keyA,valueA],[keyB, valueB]) =>{
            return valueB - valueA;
        })

        for (const [word, number] of sortedWords) {
           console.log(`${word} -> ${number}`);
        }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
 "another", "sentence", "And", "finally", "the", "third", "sentence"])