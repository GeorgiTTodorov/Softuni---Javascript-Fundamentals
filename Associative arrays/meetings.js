function meetings(array) {

    let appointments = {};

    for (const line of array) {
        let [day, name] = line.split(' ');

        if (!appointments.hasOwnProperty(day)) {
            appointments[day] = name;
            console.log('Scheduled for ' + day);
        } else {
            console.log('Conflict on ' + day + '!');
        }
        
    }

    for (const key in appointments) {
        console.log(`${key} -> ${appointments[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)