function replace(text) {
  let newStr = "";

  for (let i = 0; i < text.length; i += 1) {
    let el = text[i];
    let nextEl = text[i + 1];
    if (el !== nextEl) {
      newStr += el;
    }
  }

  console.log(newStr);
}

replace("aaaaabbbbbcdddeeeedssaa");
replace('qqqwerqwecccwd')
