function secretChat(input) {
    let concealedMessage = input.shift();

    for (let line of input) {
        let token = line.split(':|:');

        if (token[0].includes('ChangeAll')) {
            concealedMessage = concealedMessage.replace(new RegExp(token[1], 'g'), token[2]);
            console.log(concealedMessage);
        } else if (token[0].includes('Reverse')) {
            if (concealedMessage.includes(token[1])) {
                let index = concealedMessage.indexOf(token[1])
                let length = index + token[1].length;
                let part = concealedMessage.slice(index, length).split('').reverse().join('');
                concealedMessage = concealedMessage.replace(token[1], '');
                concealedMessage += part;
                console.log(concealedMessage);
            } else {
                console.log('error');
            }
        } else if (token[0].includes('InsertSpace')) {
            index = Number(token[1]);
            concealedMessage = concealedMessage.split('');
            concealedMessage.splice(index, 0, ' ');
            concealedMessage = concealedMessage.join('');
            console.log(concealedMessage);
        } else if (token[0].includes('Reveal')) {
            console.log(`You have a new text message: ${concealedMessage}`);
        }
    }

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)