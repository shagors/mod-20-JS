function toCelsius(farenhite){
    getTotal = (5/9) * (farenhite - 32);
    return getTotal;
}

var cTemp = toCelsius(90);
console.log(cTemp);