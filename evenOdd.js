// const number = 5;
// console.log(number);

// const number = 145;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

const herNumber = 1892;
const isHerNumber = isEven(herNumber);
console.log(isHerNumber);

// odd number

function isOdd(number){
    if( number % 2 !== 0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log(isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log(isHerNumberOdd);