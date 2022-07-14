function sorting(arrayOfNumbers) {

let newArray = [];

while (arrayOfNumbers.length > 0) {   
let biggest = Math.max(...arrayOfNumbers);
let smallest = Math.min(...arrayOfNumbers);

let biggestEl = arrayOfNumbers.splice(arrayOfNumbers.indexOf(biggest), 1);
newArray.push(biggestEl);
let smallestEl = arrayOfNumbers.splice(arrayOfNumbers.indexOf(smallest), 1);
newArray.push(smallestEl);
}

console.log(newArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])