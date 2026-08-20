// 1) ახსენი რა არის Set?

// Set არის მონაცემთა ტიპი, რომელიც ინახავს მხოლოდ უნიკალურ ელემენტებს.
// თუ ერთი და იგივე ელემენტი რამდენჯერმე დაემატება, მხოლოდ ერთხელ შეინახება.


// 2) როგორ უნდა შევქმნათ ცარიელი Set?

let mySet = new Set();

console.log(mySet);


// 3) რა განსხვავებაა Python Set-სა და JavaScript Set-ს შორის?

// Python-ში:
// mySet = set()

// JavaScript-ში:
let jsSet = new Set();

// ორივე ინახავს მხოლოდ უნიკალურ ელემენტებს,
// მაგრამ JavaScript-ში გამოიყენება new Set().


// 4) შექმენი ცარიელი ცხოველების Set და დაამატე რამდენიმე ცხოველი.

let animals = new Set();

animals.add("Dog");
animals.add("Cat");
animals.add("Lion");
animals.add("Tiger");
animals.add("Elephant");

console.log(animals);
console.log("ცხოველების რაოდენობა:", animals.size);


// 5) შეამოწმე არის თუ არა Max სეტში.

let players = new Set(["Alex", "Max", "Charlz"]);

if (players.has("Max")) {
    console.log("მოთამაშე მოძებნილია");
} else {
    console.log("ასეთი მოთამაშე არ არსებობს");
}


// 6) წაშალე mercedes და დაითვალე ელემენტები.

let cars = new Set(["bmw", "audi", "mercedes"]);

cars.delete("mercedes");

console.log(cars);
console.log("ელემენტების რაოდენობა:", cars.size);


// 7) დაითვალე რამდენი სხვადასხვა ქულაა.

let scores = new Set([7, 8, 6, 10, 10, 9, 5]);

console.log("სხვადასხვა ქულების რაოდენობა:", scores.size);


// 8) დაამატე ლუწი რიცხვების კუბები 1-დან 20-მდე.

let nums = new Set();

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        nums.add(i ** 3);
    }
}

console.log(nums);

if (nums.has(121)) {
    console.log("121 არსებობს");
} else {
    console.log("121 არ არსებობს");
}


// 9) შეამოწმე არის თუ არა admin ან moderator.

let roles = new Set(["admin", "moderator", "user"]);

if (roles.has("admin") || roles.has("moderator")) {
    console.log("წვდომა დაშვებულია");
} else {
    console.log("წვდომა აკრძალულია");
}


// 10) ხილების Set.

let fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("mango");
fruits.add("orange");
fruits.add("kiwi");

fruits.delete("apple");

console.log(fruits);

if (fruits.has("mango")) {
    console.log("mango არსებობს");
} else {
    console.log("mango არ არსებობს");
}

console.log("ხილების რაოდენობა:", fruits.size);