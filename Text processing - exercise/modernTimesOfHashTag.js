function modernTimesOfHashTag(input) {
    let sentenceSplit = input.split(" ");

    for (let el of sentenceSplit) {
        if (el.startsWith('#') && el.length > 1) {
            let condition = true;
            let wordToLowerCase = el.toLowerCase();

            for (let i = 1; i < wordToLowerCase.length; i++) {
                if (wordToLowerCase.charCodeAt(i) < 97 || wordToLowerCase.charCodeAt(i) > 122) {
                    condition = false;
                    break;
                }
            }
            if (condition) {
                console.log(el.substring(1));
            }
        }      
    }

}

    modernTimesOfHashTag(
        "Nowadays everyone uses # to tag a #special word in #socialMedia #515651"
    );
