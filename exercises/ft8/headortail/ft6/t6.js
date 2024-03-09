let hour = 2;
let name1 = "Muhammad"


if(hour > 6 && hour < 12 ) {
    console.log(`Good Morning! ${name1}`)
}else if(hour > 13 && hour < 17) {
    console.log(`Good Afternoon! ${name1}`)
} else {
    console.log(`Good Night ${name1}!`);
}

// Amusement Park

let age = 6;
let isHoliday = true
if((age <= 6 || age >= 65) && isHoliday == false) {
    console.log("Discount");
}else if(isHoliday == true) {
    console.log("We are off today.")
}else {
    console.log("No Discount for members between 6-65");
}

// Coin-flip game

let random = Math.random();
let compGuess = '';


// if(random > 0.5) {
//     compGuess = 'tail'    
// }else {
//     compGuess = 'head'
// }

// W/ ternary operations

compGuess = random > 0.5 ? 'tail' : 'head';