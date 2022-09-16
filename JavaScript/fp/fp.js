// functional programming 

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount * rate;
};

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

// recursion

var counter = 5;
function example(){
    console.log(counter);
    counter--;
    if (counter === 0) return;
    example();
};
example();


// get distnace using fuction programing
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

// Object Oriented Programing example (OOP)
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// first class functions 
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())