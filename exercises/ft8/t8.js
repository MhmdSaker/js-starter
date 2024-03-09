// 8a, 8b, 8c, 8d

const product = {
    name: 'basketball',
    price: 2095,

};




const product1 = {
    name: 'basketball',
    price: 2095,

};

const product2 = {
    name: 't-shirt',
    price: 1500,

};

console.log(product)

product.price += 500;
console.log(product.price);


product['delivery-time'] = 3;
console.log(product)


function comparePrice(obj1, obj2) {
    if(obj1.price > obj2.price) {
        return obj2.price;
    }
}

console.log(comparePrice(product1,product2));