function revealWords(word, text) {
  let searchedWords = word.split(", ");
  let textArr = text.split(" ");

  for (const word of searchedWords) {
    for (const el of textArr) {
      if (el.includes("*") && el.length === word.length) {
        text = text.replace(el, word);
      }
    }
  }

  console.log(text);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)