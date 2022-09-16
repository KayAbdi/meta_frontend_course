// polymorphism using classes

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

var date = new Date();
console.log(date, ":", Math.pow(2,5));

/** To initiate a new class, you use the class keyword, 
 * then specify the name of your class, 
 * with the first letter capitalized, 
 * and then you add an opening and a closing curly brace.
*/
class Train { 
    // the first piece of code that you need to define is the constructor:
    constructor(color, lightsOn) {
        // What does this this keyword here represent?
        // It's the future object instance of the Train class.
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain);

/**
 * You can also add methods to classes, and these methods will 
 * then be shared by all future instance objects of my Train 
 * class.
 * For example:
 */
 class Train1 {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train2 = new Train1('red', false);

train2.toggleLights(); // undefined
train2.lightsStatus(); // Lights on? true
train2.getSelf(); // Train {color: 'red', lightsOn: true}
train2.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}