// 1)
let numbers = [1,2,3,4,5,6,7,8,9,10];

let odd = [];
let even = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i]);
    } else {
        odd.push(numbers[i]);
    }
}

console.log("კენტები:", odd);
console.log("ლუწები:", even);



// 2)
let fruits = ["apple","orange","mango","dragonfruit","banana","lemon"];
let fruit = "avocado";




// 3)
console.log(fruits.includes(fruit));
function sumNumbers(arr) {
    let positiveSum = 0;
    let negativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveSum += arr[i];
        } else if (arr[i] < 0) {
            negativeSum += arr[i];
        }
    }

    console.log("დადებითების ჯამი:", positiveSum);
    console.log("უარყოფითების ჯამი:", negativeSum);
}

sumNumbers([10,20,-5,10,2,3,-50,-20,-11,1]);