function tripleOfLatinLetters(num) {


  for (let i = 1; i <= num; i++) {
      let a = 97;
      if (i !== 1) {
         a += i - 1;
      }
 
    for (let g = 1; g <= num; g++) {
      let b = 97;

      if (g !== 1) {
         b += g - 1;
      }
 
      for (let h = 1; h <= num; h++) {
         let c = 97;

         if (h !== 1) {
            c += h - 1;
         }

        console.log(
         `${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)}`
        );
      }
    }
  }
}

tripleOfLatinLetters('3');
