function mathPow(num, power) {

    raisedNum = 1;

for (let i = 0; i < power; i++) {

    raisedNum *= num;   
}

console.log(raisedNum);

}

mathPow(2, 8)