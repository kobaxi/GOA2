// 1. რიცხვები 1-დან 5-მდე
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. ლუწი რიცხვები
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 3. რიცხვების ჯამის გამოთვლა
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);

// 1. ლუწია თუ კენტი
function check(num) {
    if (num % 2 == 0) {
        return "ლუწი";
    } else {
        return "კენტი";
    }
}

console.log(check(7));

// 2. ასაკის შემოწმება
function adult(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(adult(16));

// 3. რიცხვის დადებითის შემოწმება
function positive(num) {
    if (num > 0) {
        return "Positive";
    } else {
        return "Not positive";
    }
}

console.log(positive(-5));














/*
map(), filter(), reduce() - ახსნა


1) map()

map() გადაუვლის მასივის ყველა ელემენტს,
თითოეულ ელემენტზე შეასრულებს მოქმედებას
და დააბრუნებს ახალ მასივს.
*/
/*
მაგალითი 1
*/
let nums = [1,2,3,4,5,6,7,8,9,10];
function sum(num){
    return nums *2
}
const new_nums = nums.map(sum)
console.log(new_nums)
/*
2) filter()

filter() გადაუვლის მასივის ყველა ელემენტს.

თუ return აბრუნებს true-ს,
ელემენტი დარჩება.

თუ return აბრუნებს false-ს,
ელემენტი ახალ მასივში აღარ მოხვდება.
*/
/*
მაგალითი 1
*/
let nums1 = [1,2,3,4,5,6,7,8,9,10];
function sum(num){
    return nums1 % 2 === 0
}
const new_nums1 = nums1.filter(sum)
console.log(new_nums1)
/*
3) reduce()

reduce() გამოიყენება იმისთვის,
რომ მთელი მასივი ერთ მნიშვნელობად გადაიქცეს.
/*
მაგალითი 1
*/
let nums2 = [1,2,3,4,5,6,7,8,9,10];
function full(ჯამი , რიცხვი){
    return ჯამი + რიცხვი
}
const new_nums2 = nums2.reduce(full)
console.log(new_nums2)