let x = 20



console.log( .length);



const person = {
    name: 'Muhammad',
    age: 20,
    id: 222101566,
    method: function fun1() {
        console.log(`Hello, ${person.name}`)
    },

    rating: {
        stars: 2,

    },


};



console.log(JSON.stringify(person));

jsonStr = JSON.parse(JSON.stringify(person));

console.log(jsonStr)

 // dot notat.
person['name']; // bracket notat.

const { name } = person;

console.log(name);
console.log(person['name']);
console.log(person.rating.stars);
person.method()










