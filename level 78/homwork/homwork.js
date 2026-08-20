// 1) map() - გაამრავლეთ ყველა რიცხვი ორზე

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = nums.map(function(num) {
    return num * 2;
});

console.log(doubled);


// 2) map() - ყველა ასო გახადეთ დიდი

const letters = ["a", "b", "c", "d"];

const upperLetters = letters.map(function(letter) {
    return letter.toUpperCase();
});

console.log(upperLetters);


// 3) map() - თითოეული სიტყვის სიგრძე

const fruits = ["apple", "banana", "kiwi"];

const lengths = fruits.map(function(fruit) {
    return fruit.length;
});

console.log(lengths);


// 4) map() - თითოეული რიცხვის 10%

const prices = [100, 200, 300];

const tenPercent = prices.map(function(price) {
    return price * 0.10;
});

console.log(tenPercent);


// 5) filter() - მხოლოდ ლუწი რიცხვები

const numbers1 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers1.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);


// 6) filter() - მხოლოდ 4-ზე მეტი ასოს მქონე სიტყვები

const words = ["hi", "hello", "sun", "world"];

const longWords = words.filter(function(word) {
    return word.length > 4;
});

console.log(longWords);


// 7) filter() - მხოლოდ ჭეშმარიტი (truthy) მნიშვნელობები

const values = [0, 1, false, 2, "", 3, null, 4];

const truthyValues = values.filter(function(value) {
    return value;
});

console.log(truthyValues);


// 8) filter() - მხოლოდ 3-ზე გაყოფადი რიცხვები

const numbers2 = [3, 5, 6, 9, 10, 12];

const divisibleByThree = numbers2.filter(function(num) {
    return num % 3 === 0;
});

console.log(divisibleByThree);


// 9) reduce() - ყველა რიცხვის ჯამი

const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);


// 10) reduce() - ყველა რიცხვის ნამრავლი

const numbers4 = [1, 2, 3, 4];

const product = numbers4.reduce(function(total, num) {
    return total * num;
}, 1);

console.log(product);