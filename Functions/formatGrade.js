function formatGrade(num) {

    let result = '';
    let grade = num.toFixed(2);

    if (num < 3.00) {
        result = 'Fail'; grade = 2;
    } else if (num >= 3.00 && num < 3.50) {
        result = 'Poor';
    } else if (num >= 3.50 && num < 4.50 ) {
        result = 'Good';
    } else if ( num >= 4.50 && num < 5.50) {
        result = 'Very good';
    } else {
        result = 'Excellent';
    }
        console.log(`${result} (${grade}) `);

}

formatGrade(2.99)