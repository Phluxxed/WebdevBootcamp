const faker = require('faker');

var products = [];
var prices = [];

console.log("==========\n PRICES \n==========")

for (i = 0; i < 10; i++) {
    products.push(faker.commerce.productName());
    prices.push(faker.commerce.price());
}

for (i = 0; i < products.length; i++) {
    console.log(products[i] + ' - $' + prices[i]);
}