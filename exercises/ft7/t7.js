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


