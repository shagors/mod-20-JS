function toFarenhite(celcious){
    totalFaren = (celcious * 9) / 5 + 32;
    return totalFaren;
}

var giveCel = toFarenhite(45);
console.log(giveCel);