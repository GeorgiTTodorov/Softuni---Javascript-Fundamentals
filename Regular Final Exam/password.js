function password(input) {
    let numOfPasswords = +input.shift();
    let pattern =
        /([^\.]+)>(?<numbers>\d{3})\|(?<lowercase>[a-z]{3})\|(?<upercase>[A-Z]{3})\|(?<symbols>[^<>]*)<(\1)/g;

    let match = input.match(pattern);

    console.log(match);

}

password(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])