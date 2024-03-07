var string = `Muhammad`

console.log(`My name is ${string}`)
console.log("My name is " + string)

console.log("Total cost: " + "$" + (3 + 5))
console.log(`Total cost: $${3 + 5}`)
// alert(`Total cost: $${3 + 5}`)

var total = (599 + 295) / 100
console.log("Total cost: $" + total)
console.log(`Total cost: $${total}
Thank you, come again!
`)


var totalItems = (2095 * 2) + (799 * 2)
var shipping = 499
var totalItemswShipping = (totalItems + (shipping * 2))
console.log(totalItems)
console.log(`Items ${(2+2)}: ${(totalItems) / 100}`)
console.log(`Total with shipping: ${(2+2)}: ${(totalItemswShipping / 100)}`)
console.log(`Estimated Tax (10%): ${Math.round((totalItemswShipping * 0.1)) / 100}`)