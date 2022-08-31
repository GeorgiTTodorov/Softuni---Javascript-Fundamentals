function oddOccurrences(input) {
  let sentence = input.split(" ");
  let occurences = new Map();

  for (const el of sentence) {
    let wordLowerC = el.toLowerCase();
    if (!occurences.has(wordLowerC)) {
      occurences.set(wordLowerC, 1);
    } else {
      let times = occurences.get(wordLowerC);
      occurences.set(wordLowerC, (times += 1));
    }
  }

  let filtered = Array.from(occurences).filter(([keyA, valueA]) => {
    return valueA % 2 === 1;
  });
  let string = "";

  for (const [key, value] of filtered) {
    string += `${key} `;
  }

  console.log(string);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
