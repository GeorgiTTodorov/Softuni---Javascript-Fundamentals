function wordsTracker(arr) {
  let words = new Map();
  let wordsToFind = arr.shift().split(" ");
  
  for (let wordec of wordsToFind) {
      words.set(wordec, 0);
  }

  for (const word of arr) {
    if (words.has(word)) {
      let count = words.get(word);
      words.set(word, (count + 1));
    }
  }

  let sortedWords = Array.from(words).sort(([keyA, valueA], [keyB, valueB]) => {
    return valueB - valueA;
  });

  sortedWords.forEach(([key, value]) => {
    console.log(`${key} - ${value}`);
  });
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']    
);
