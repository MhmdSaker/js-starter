function greet(name1 = 'there!') {
    console.log(`Hello, ${name1}`);
}


// Another way
/*
function greet(name1) {
    if(name1 == undefined) {
        console.log('Hello, there!')
    }else {
        console.log(`Hello, ${name1}`);
    }
}
*/


greet();
greet('');
greet("Muhammad")


// 7d, 7e, 7f


function celToFah(cel) {
    let fahrenheit = (cel * 9/5) + 32
    return fahrenheit;
}


function fahToCel(fah) {
    let celsius = (fah - 32) * 5/ 9
    return celsius;
}

let val = '';


function convertTemperature(deg, unit) {

    if(unit == 'F') {
        val = fahToCel(deg)
        return val + 'C';
    }else if (unit == 'C') {
        val = celToFah(deg);
        return val + 'F';
    }
}


console.log(celToFah(25));
console.log(fahToCel(86));

console.log(convertTemperature(86, 'F'));
console.log(convertTemperature(25, 'C'));