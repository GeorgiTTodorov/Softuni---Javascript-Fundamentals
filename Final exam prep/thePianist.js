function thePianist(array) {
    let listSize = Number(array.shift());
    let composerList = {};

    for (let i = 0; i < listSize; i++) {
      let line = array.shift();
      let [piece, composer, key] = line.split('|');

      composerList[piece] = {composer: composer, key: key};
    }
      for (let el of array) {
          let [command, piece, composer, key] = el.split('|');

          if (command === 'Stop') {
             break;
          }
          
          switch (command) {
            case 'Add': 
              if (composerList.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);    
            } else {
              composerList[piece] = {composer, key};
              console.log(`${piece} by ${composer} in ${key} added to the collection!`);  
            } break;
            case 'Remove':
              if (composerList.hasOwnProperty(piece)) {
                  delete composerList[piece];
                  console.log(`Successfully removed ${piece}!`);
              } else {
                  console.log(`Invalid operation! ${piece} does not exist in the collection.`);
              } break;
            case 'ChangeKey': 
            if (composerList.hasOwnProperty(piece)) {
                let temp = composerList[piece];
                let cmp = temp['composer'];
                let switchKey = composer;
                composerList[piece] = {composer: cmp, key: switchKey}
                console.log(`Changed the key of ${piece} to ${switchKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } break;   
          }
      }
          for (let piece of Object.entries(composerList)) {
              
              console.log(`${piece[0]} -> Composer: ${piece[1]['composer']}, Key: ${piece[1]['key']}`);
                    
    }
 }

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )