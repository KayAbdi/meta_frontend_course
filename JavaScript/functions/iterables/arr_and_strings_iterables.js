// Arrays are iterable

var veggies = ['onion', 'parsley', 'carrot'];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for(var i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
};

// strings are iterable, too
var greeting = 'Howdy';

console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for(var i = 0; i < greeting.length; i++){
    console.log(greeting[i]);
};


//but strings are not arrays thus you can't use array methods such as pop() and push() on strings 
var greet = 'Hello';
// greet.pop(); won't work here

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']