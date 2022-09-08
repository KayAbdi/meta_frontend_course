// loop through 1 to 10
for (var i = 1; i <= 10; i++){
    console.log(i + ' aad');
};
console.log("%cBreak Here", "color: red")
// loop through 10 to 1
for (var i = 10; i >= 1; i--){
    console.log(i + ' aad');
};

// for loop to show alphabet letters
var cubes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
};

// while loops
var counter = 3;
while(counter > -2){
    console.log(counter);
    counter--;
}