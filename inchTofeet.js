function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log(feet);

var dadaInches = 256;
var feet = inchToFeet(dadaInches);
console.log(feet);


function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon  = mileToKm(26.2);
console.log(marathon);