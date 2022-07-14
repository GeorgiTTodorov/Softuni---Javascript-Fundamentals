function convertToObject(str) {

    let person = JSON.parse(str);

    for (const key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')