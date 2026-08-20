// 1) გამეორებული რიცხვების ამოშლა

const nums = [9, 30, 2, 68, 8, 9, 15, 47, 4.5, 6, 3, 2, 68, 2, 5, 78, 45, 3, 0];

const uniqueNums = [...new Set(nums)];

console.log(uniqueNums);


// 2) მასივის შებრუნება

const arr = ["a", "b", "c", "d"];

arr.reverse();

console.log(arr);


// 3) მასივის ყველა ელემენტის ჯამი

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


// 4) თუ რიცხვი იყოფა 3-ზე → 3
// თუ იყოფა 5-ზე → 5
// სხვა შემთხვევაში → 0

let nums2 = [3, 5, 10, 12, 15, 7, 8, 9, 20];

for (let i = 0; i < nums2.length; i++) {

    if (nums2[i] % 3 === 0) {
        nums2[i] = 3;
    }
    else if (nums2[i] % 5 === 0) {
        nums2[i] = 5;
    }
    else {
        nums2[i] = 0;
    }

}

console.log(nums2);


// 5) ხილის გამეორების დათვლა

let fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "kiwi"
];

let count = {};

for (let i = 0; i < fruits.length; i++) {

    if (count[fruits[i]]) {
        count[fruits[i]]++;
    } else {
        count[fruits[i]] = 1;
    }

}

console.log(count);