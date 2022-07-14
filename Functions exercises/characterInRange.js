function characterInRange(char1, char2) {

   let charA = char1.charCodeAt();
   let charB = char2.charCodeAt();
   let arr = [];

   if (charA < charB) {
        for (let i = charA + 1; i < charB; i++) {
           arr.push(String.fromCharCode(i));  
        } 
   } else {
        for (let i = charB + 1; i < charA; i++) {
            arr.push(String.fromCharCode(i));
        }
   }
        console.log(arr.join(' '));
}

characterInRange('#',
':'
)