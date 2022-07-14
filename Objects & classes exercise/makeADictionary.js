function makeADictionary(arrOfObj) {
  let dictionary = {};

  for (const el of arrOfObj) {
    let currentLine = JSON.parse(el);
    let term = Object.keys(currentLine);
    let meaning = Object.values(currentLine);
    let definition = meaning[0];

    dictionary[term] = definition;
  }
    
  let array = Object.entries(dictionary);
  let sortedArray = array.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  })

  for (const el of sortedArray) {
    console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
  }
    
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"az."}'
]);
