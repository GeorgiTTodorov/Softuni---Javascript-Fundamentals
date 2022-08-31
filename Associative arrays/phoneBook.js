function phoneBook(array) {
    let phoneInfo = {};

    for (const line of array) {
        let [name, phoneNumber] = line.split(' ');

        phoneInfo[name] = phoneNumber;
    }

    for (let key in phoneInfo) {
        console.log(`${key} -> ${phoneInfo[key]}`);
    }


}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)