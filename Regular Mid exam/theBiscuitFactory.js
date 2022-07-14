function theBiscuitFactory(array) {

    let productionPerDay = 0;
    let productionFor30Days = 0;
    array = array.map(Number);
    let biscPerDay = array[0];
    let workers = array[1];
    let secFactoryProd = array[2];

    for (let i = 0; i < 30; i++) {
        if (i % 3 === 0) {
            productionPerDay += Math.floor(workers * (biscPerDay * 0.75));
        } else {
            productionPerDay += workers * biscPerDay;
        }
        productionFor30Days = productionPerDay;
    }
            console.log(`You have produced ${productionFor30Days} biscuits for the past month.`);
            if (productionFor30Days > secFactoryProd) {
                let difference = productionFor30Days - secFactoryProd;
                console.log(`You produce ${(difference / secFactoryProd * 100).toFixed(2)} percent more biscuits.`);
            } else {
                let difference = secFactoryProd - productionFor30Days;
                console.log(`You produce ${(difference / secFactoryProd * 100).toFixed(2)} percent less biscuits.`);
            }
            
}

theBiscuitFactory(["65",
"12",
"26000"])
