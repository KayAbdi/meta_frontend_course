// rest and spread examples 

const addTaxToPrices = (taxRate, ...itemsBought) => {
    return itemsBought.map(item => taxRate * item);
};

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);

// Join arrays, objects using the rest operator
// Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


// Add new members to arrays without using pop() or shift()
let veggies = ['onion', 'parsley'];
veggies = ['carrot', 'beetroot', ...veggies];
console.log(veggies);

//conver a string to an array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)