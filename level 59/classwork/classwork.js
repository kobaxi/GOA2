// 1
let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let num of numbers) {
  if (num % 2 === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// 2
let fruits = ["ვაშლი", "მსხალი", "ატამი"];
console.log("მე მიყვარს " + fruits[2]);

// 3
let nums = [5, 10, 15, 20];
let sum = 0;

for (let num of nums) {
  sum += num;
}

console.log(sum);

// 4
let arr = [3, 7, 2, 9, 5];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

// 5
let arr2 = [3, 7, 2, 9, 5];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}

console.log(min);