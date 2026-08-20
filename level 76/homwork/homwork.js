// 1) გამოიტანეთ პირველი და ბოლო ელემენტები

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// 2) გამოიტანეთ ელემენტების რაოდენობა

let items = [10, 20, 30, 40];

console.log(items.length);


// 3) დაამატეთ ჟირაფი სიის ბოლოში

let animals = ["cat", "dog"];

animals.push("giraffe");

console.log(animals);


// 4) ამოშალეთ ბოლო ელემენტი

let numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);


// 5) ამოშალეთ პირველი ელემენტი

let queue = ["Alice", "Bob", "Charlie"];

queue.shift();

console.log(queue);


// 6) დაამატეთ წითელი სიის დასაწყისში

let colors = ["green", "blue"];

colors.unshift("red");

console.log(colors);


// 7) გამოიტანეთ ყველა ელემენტი სათითაოდ

let scores = [10, 20, 30];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}


// 8) მიიღეთ შედეგი:
// Hello Alice!
// Hello Bob!

let names = ["Alice", "Bob"];

for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + "!");
}


// 9) გაამრავლეთ ყველა ელემენტი ორზე

let prices = [1, 2, 3];

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 2;
}

console.log(prices);


// 10) დააჯამეთ ყველა რიცხვი მასივში

let items2 = [5, 10, 15];

let sum = 0;

for (let i = 0; i < items2.length; i++) {
    sum += items2[i];
}

console.log(sum);