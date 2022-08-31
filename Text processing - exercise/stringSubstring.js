function stringSubstring(word, text) {
  let textArr = text.split(" ");

  for (let el of textArr) {
    let char = el.toLowerCase();
    let searchedWord = word.toLowerCase();
    if (char === searchedWord) {
      console.log(word);
    return;
  }
}       
    console.log(`${word} not found!`);
}

stringSubstring("pyrhon", "JavaScript is the best programming language");
