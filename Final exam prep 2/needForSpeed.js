function needForSpeed(input) {
    let carsInPossesion = Number(input.shift());
    class Cars {
        constructor(model, mileage, fuel) {
            this.model = model;
            this.mileage = mileage;
            this.fuel = fuel;
        }
    }

    let garage = [];
    for (let i = 0; i < carsInPossesion; i++) {
        let [carModel, carMileage, carFuel] = input[i].split('|');
        let car = new Cars(carModel, +carMileage, +carFuel);
        garage.push(car);
    }

    for (let n = carsInPossesion; n < input.length; n++) {
        let [command, model, valueA, valueB] = input[n].split(' : ');

        if (command === 'Stop') {
            for (let car of garage) {
                console.log(`${car['model']} -> Mileage: ${car['mileage']} kms, Fuel in the tank: ${car['fuel']} lt.`);
            }
            break;
        }
        switch (command) {
            case 'Drive': let distance = Number(valueA); let fuel = Number(valueB);
                for (let g = 0; g < garage.length; g++) {
                    let currentModel = garage[g]['model'];
                    if (currentModel === model) {
                        if (garage[g]['fuel'] < fuel) {
                            console.log("Not enough fuel to make that ride");
                            break;
                        } else {
                            garage[g]['fuel'] -= fuel;
                            garage[g]['mileage'] += distance;
                            console.log(`${currentModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                        }
                        if (garage[g]['mileage'] >= 100000) {
                            console.log(`Time to sell the ${currentModel}!`);
                            garage.splice(g, 1);
                        }
                    }
                }
                break;
            case 'Refuel': let refill = Number(valueA);
                for (let h = 0; h < garage.length; h++) {
                    if (garage[h]['model'] === model) {
                        let tempTank = garage[h]['fuel'] + refill;

                        if (tempTank > 75) {
                            let difference = 75 - garage[h]['fuel'];
                            garage[h]['fuel'] = 75;
                            console.log(`${garage[h]['model']} refueled with ${difference} liters`);
                        } else {
                            garage[h]['fuel'] += refill;
                            console.log(`${garage[h]['model']} refueled with ${refill} liters`);
                        }
                    }
                }
                break;
            case 'Revert': let revert = Number(valueA);
                for (let h = 0; h < garage.length; h++) {
                    if (garage[h]['model'] === model) {
                        garage[h]['mileage'] -= revert;
                        if (garage[h]['mileage'] < 10000) {
                            garage[h]['mileage'] = 10000;
                            break;
                        } else {
                            console.log(`${garage[h]['model']} mileage decreased by ${revert} kilometers`);
                        }
                    }

                }
        }
    }

}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 62000 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)
needForSpeed(['4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'])