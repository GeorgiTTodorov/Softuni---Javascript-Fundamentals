function houseParty(array) {

    let guestList = [];

    for (let i = 0; i < array.length; i++) {
        let commanddString = array[i].split(' ');
        let name = commanddString[0];

        if (commanddString.length === 3) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name));
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)