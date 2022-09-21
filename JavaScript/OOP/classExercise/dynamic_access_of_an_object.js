function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  const car = {
    engine: true,
  };

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log(`The sportsCar object: ${sportsCar}`);

for (prop in sportsCar){console.log('for-in props: ', prop)};

for (prop of Object.keys(sportsCar)){console.log('for-of: ', prop, ' -- ', sportsCar[prop]);}