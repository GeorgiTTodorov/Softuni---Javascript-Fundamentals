function darkestDungeon(arr) {

    let arr1 = arr.join('|');
    let arr2 = arr1.split('|');
    let arr3 = arr2.join(' ');
    let arr4 = arr3.split(' ');
    let health = 100;
    let coins = 0;
    let roomCount = 0;


    for (let i = 0; i < arr4.length; i++) {
        let element = arr4[i];

        if (element % 1 === 0) {
            element = Number(arr4[i]);
            arr4[i] = element;
        }
    }

    for (let n = 0; n < arr4.length; n++) {
        let index = arr4[n];

        if (index === 'potion') {
            n++;
            index = arr4[n];
            let healingNumber = index;
            console.log(`You healed for ${healingNumber} hp.`);
            health += healingNumber;
            roomCount++;
            if (health >= 100) {
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);
        } else if (index === 'chest') {
            n++;
            index = arr4[n];
            let foundCoins = index;
            console.log(`You found ${foundCoins} coins.`);
            coins += foundCoins;
            roomCount++;
        } else {
            let monsterName = index;
            n++;
            index = arr4[n];
            health -= index;
            if (health <= 0) {
                console.log(`You died! Killed by ${monsterName}.`);
                roomCount++;
                console.log(`Best room: ${roomCount}`);
            } else {
                console.log(`You slayed ${monsterName}.`);
                roomCount++;
            }
        }

    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);    
    }

}

darkestDungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])