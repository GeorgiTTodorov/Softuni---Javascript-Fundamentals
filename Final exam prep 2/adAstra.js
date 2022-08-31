function adAstra(input) {
    let pattern =
        /([#|\|])(?<item>[A-Za-z ]+)(\1)(?<expDate>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d{0,4}|[0-9][0-9][0-9][0-9][0])(\1)/g;

    let match = pattern.exec(input);
    let totalCalories = 0;
    let items = [];
    let hasItems = false;


    while (match !== null) {
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        let itemName = match.groups.item;
        let date = match.groups.expDate;
        items.push({itemName:itemName, date:date, calories:calories});
        hasItems = true;

        match = pattern.exec(input);
    }
    let daysToLast = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(daysToLast)} days!`);

    if (hasItems) {
        for (const el of items) {
            console.log(`Item: ${el['itemName']}, Best before: ${el['date']}, Nutrition: ${el['calories']}`);
        }
    }
    
}

adAstra([
    '##19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    
)
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])
// adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])