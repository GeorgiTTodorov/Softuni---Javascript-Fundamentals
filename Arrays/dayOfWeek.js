function dayOfWeek(day) {

    let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <= 7) {
       let input = weekDay[day - 1];
        console.log(input);
    } else {
        console.log("Invalid day!");
    }

}

dayOfWeek(7)