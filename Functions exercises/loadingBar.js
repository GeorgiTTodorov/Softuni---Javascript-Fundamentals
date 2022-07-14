function loadingBar(number) {

    let percentSign = '%'.repeat(number / 10);
    let dot = '.'.repeat(10 - percentSign.length);

    if (percentSign.length < 10) {
        console.log(`${number}% [${percentSign}${dot}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${percentSign}]`);
    }

}

loadingBar(100)