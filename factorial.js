// var factorial = 1;
// for(var i = 1; i<= 7; i++ ){
//     console.log(i);
//     factorial = factorial * i;
// }

// console.log(factorial);

// function factorial(number){
//     let fact = 1;
//     for(let i = 1; i <= number; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// let facto = factorial(7);
// console.log(facto);


// while loop die

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);