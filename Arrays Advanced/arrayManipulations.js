function arrayManipulations(arr) {

let arrNumbers = arr.shift().split(' ').map(Number);

for (let i = 0; i < arr.length; i++) {
    let [command, firstNum, secondNum] = arr[i].split(' ');
    
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
        case 'Add': arrNumbers.push(firstNum); break;
        case 'Remove':arrNumbers = arrNumbers.filter(el => el !== firstNum); break;
        case 'RemoveAt': arrNumbers.splice(firstNum, 1); break;
        case 'Insert':  arrNumbers.splice(secondNum, 0, firstNum); break;      
    }
}

console.log(arrNumbers.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']


)