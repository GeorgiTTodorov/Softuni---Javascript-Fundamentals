function substring(word, startIndex, count) {
    let elementsToTake = count + startIndex;

    let part = word.substring(startIndex, elementsToTake)
    console.log(part);

}

substring('ASentencea as ', 1, 8)