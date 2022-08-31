function solve(num) {

    for (let el of num) {
        let char = num.indexOf(el);
        let symbol = el.charCodeAt(char);

        console.log(symbol);
    }

}

solve(['2'])