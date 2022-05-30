function tripleOfLatinLetters(num) {


  for (let i = 1; i <= num; i++) {
      let a = 97;
      if (i !== 1) {
         a += i - 1;
      }
   //  if (i === 1) {
   //    a = 97;
   //  } else if (i === 2) {
   //    a = 98;
   //  } else if (i === 3) {
   //    a = 99;
   //  } else {
   //    a += i;
   //  }
    for (let g = 1; g <= num; g++) {
      let b = 97;

      if (g !== 1) {
         b += g - 1;
      }
      // if (g === 1) {
      //   b = 97;
      // } else if (g === 2) {
      //   b = 98;
      // } else if (g === 3) {
      //   b = 99;
      // } else {
      //   b += g;
      // }
      for (let h = 1; h <= num; h++) {
         let c = 97;

         if (h !== 1) {
            c += h - 1;
         }
      //   if (h === 1) {
      //     c = 97;
      //   } else if (h === 2) {
      //     c = 98;
      //   } else if (h === 3) {
      //     c = 99;
      //   } else {
      //     c += h;
      //   }
        console.log(
         `${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)}`
        );
      }
    }
  }
}

tripleOfLatinLetters('3');
