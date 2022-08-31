function censoredWords(text, word) {

    let count = word.length;

    while (text.includes(word)) {
       text = text.replace(word, '*'.repeat(count));
    }
    console.log(text);

}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden')