function manOWar(array) {

    let index = array.slice();
    let pirateShipStatus = index.split('>');
    index++;
    let warShipStatus = index.split('>');
    index++;
    let maximumHealthForSection = Number(index);
    index++;
    let command = index;
    let gameOver = false;

    while (command !== 'Retire') {
        let arrayOfString = command.split(' ');
        let command = arrayOfString[0];
        let dmgIndex = Number(arrayOfString[1]);

        switch (command) {
            case 'Fire': let damage = Number(arrayOfString[2]);
            if (warShipStatus.length >= dmgIndex) {
                    warShipStatus.indexOf(dmgIndex) -= damage;
                    if (warShipStatus.indexOf(dmgIndex) <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        gameOver = true;
                        return;
                    }
            } break;
            case 'Defend': let startIndex = dmgIndex; let endIndex = Number(arrayOfString[2]); let dmg = Number(arrayOfString[3]);
            if (pirateShipStatus.length >= startIndex && pirateShipStatus >= endIndex) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShipStatus.indexOf(i) -= dmg;
                if (pirateShipStatus.indexOf(i) <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    gameOver = true;
                    return;
                }    
            }
         } break;
            case 'Repair': if (dmgIndex <= pirateShipStatus.length) {
                pirateShipStatus.indexOf(dmgIndex) += Number(arrayOfString[2]);
                if (pirateShipStatus.indexOf(dmgIndex) > maximumHealthForSection) {
                    pirateShipStatus.indexOf(dmgIndex) = 70;
                }
            } break;
            case 'Status':  let count = 0;
            pirateShipStatus.forEach(el => el = maximumHealthForSection * 0.2, count++);
            console.log(`${count} sections need repair.`); 
            break;    
        }
    }
            if (gameOver) {
                let pirateShipSum = pirateShipStatus.forEach(el => pirateShipStatus += el);
                let warShipSum = warShipStatus.forEach(el => pirateShipStatus += el);
                console.log(`Pirate ship status: ${pirateShipSum}`);
                console.log(`Warship status: ${warShipSum}`);
            }

}

manOWar(['12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire',
])