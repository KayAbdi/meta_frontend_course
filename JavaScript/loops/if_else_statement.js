var place = 'first';
olympic = (place) => {
    if(place == 'first'){
        console.log('Gold!')
    }else if(place == 'second'){
        console.log('silver');
    } else if (place == 'third'){
        console.log('Bronze');
    } else {
        console.log('No medal');
    };
};
olympic(place);
// Are you old enough
var age = 19;

if(age >= 65){
    console.log("You get your income from your pension");
} else if(age < 65 && age >= 18){
    console.log("Each month you get a salary");
} else if(age < 18){
    console.log('You get an allowance');
} else {
    console.log("The value of the age variable is not numerical");
}