/*
    arr.filter(function) => create a new array from (arr) with
    elements that meets the condition in that function

*/ 

const numbers = [1,2,3,4,5,6]
const evenNums = numbers.filter(number => number % 2 === 0)
console.log(evenNums)


/*Combining filter with Other Methods */
const doubledEvens = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2)

console.log(doubledEvens)



/*============================================================== */



