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
