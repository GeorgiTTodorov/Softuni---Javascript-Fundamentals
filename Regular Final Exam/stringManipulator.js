function stringManipulator(input) {
  let myString = input.shift();

  for (let line of input) {
    if (line === "End") {
      break;
    }
    let [command, valueA, valueB] = line.split(" ");
    if (line.includes("Translate")) {
      let char = valueA;
      let replacement = valueB;
      myString = myString.replace(new RegExp(valueA, "g"), replacement);
    //   console.log(myString);
    } else if (line.includes("Includes")) {

      let el = valueA;
      if (myString.includes(el)) {
        console.log("True");
      } else {
        console.log("False");
      }

    } else if (line.includes("Start")) {

      el = valueA;
      if (myString.startsWith(el)) {
        console.log("True");
      } else {
        console.log("False");
      }

    } else if (line.includes("Lowercase")) {

      myString = myString.toLowerCase();
    //   console.log(myString);

    } else if (line.includes("FindIndex")) {

      let element = valueA;
    //   console.log(myString.lastIndexOf(element));

    } else if (line.includes("Remove")) {

      let startIndex = Number(valueA);
      let endIndex = Number(valueB);
      let deletedChars = '';
      let str = ''
      for (let i = 0; i <= myString.length; i++) {
        if (i === startIndex) {
            deletedChars += myString[i];
            i++;
        } else if ( i === endIndex) {
            str += myString[i];
            i++;
        } else {
          str += myString[i];
          
        }
        
        
      }
    
        console.log(deletedChars);
        console.log(str);
      
}
  }
}

// stringManipulator([
//   "//Thi5 I5 MY 5trING!//",
//   "Translate 5 s",
//   "Includes string",
//   "Start //This",
//   "Lowercase",
//   "FindIndex i",
//   "Remove 0 10",
//   "End",
// ]);
stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])

