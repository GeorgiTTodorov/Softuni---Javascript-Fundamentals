function orders(product, quantity) {

    let price = 0;
    let totalPrice = 0;

    switch (product) {
        case 'water': price = 1.00; totalPrice = price * quantity; break;
        case 'coffee': price = 1.50; totalPrice = price * quantity; break;
        case 'coke': price = 1.40; totalPrice = price * quantity; break;
        case 'snacks': price = 2.00; totalPrice = price * quantity; break;    
    }

    console.log(totalPrice.toFixed(2));

}

orders("water", 5)