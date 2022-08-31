function encryptedPassword(input) {
    let numOfPasswords = +input.shift();
    let pattern =
        /([^\.]+)>(?<numbers>\d{3})\|(?<lowercase>[a-z]{3})\|(?<upercase>[A-Z]{3})\|(?<symbols>[^<|>].*)<(\1)/g;

    for (let i = 0; i < numOfPasswords; i++) {
        let current = pattern.exec(input[i])
        if (current !== null) {
            let correctPwd = '';
            correctPwd += current.groups.numbers + current.groups.lowercase + current.groups.upercase + current.groups.symbols;
            console.log(`Password: ${correctPwd}`);

        } else {
            console.log('Try another password!');
        }
    }

}

encryptedPassword(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"]
)
