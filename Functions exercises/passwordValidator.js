function passwordValidator(input) {

    let isValid = true;
    let digitsCounter = 0;
    let length = input.length;

    if (length < 6 || length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    for (const el of input) {
        let currentElement = el.charCodeAt();

        if (currentElement >= 65 && currentElement <= 90 || currentElement >= 97 && currentElement <= 122
            || currentElement >= 48 && currentElement <= 57) {
            isValid;

        } else {
            console.log('Password must consist only of letters and digits');
            isValid = false;
            break;
        }
    }

    for (const el of input) {
        let element = el.charCodeAt();

        if (element >= 48 && element <= 57) {
            digitsCounter++;
        }
    }

    if (digitsCounter < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('Pa$s$s')