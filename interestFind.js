function interest(totalTaka, rate, year){
    getInterest = (totalTaka * rate * year) / 100;
    return getInterest;
}


var allInterest = interest(1000000, 5, 10);
console.log(allInterest);