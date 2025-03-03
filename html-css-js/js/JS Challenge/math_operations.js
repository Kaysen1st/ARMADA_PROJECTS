// task 1
let item1 = 15;
let item2 = 15;
let item3 = 15;

let totalItems = item1 + item2 + item3;

console.log('the total cost of the items is: $' + totalItems);

// task 2
let num1 =6;
let num2 = 8;
let num3 = 8;

let averageItems = (num1 + num2 + num3) / 3;

console.log('the average is: ' + averageItems);

// task 3
let num = 15;

if (num % 2 === 0) {
    console.log(num + ' is an even number.');
} else {
    console.log(num + ' is an odd number.');
}

// task 4
let items = 100;
let discount = 20;

let discountedPrice = items * (1 - discount / 100);

console.log('the discounted price is: $' + discountedPrice);

// Bonus task
let finalprice= 80;
let discounts = 20;

let originalPrice = finalprice/(1-discounts/100);

console.log('the original price is: $' + originalPrice);
