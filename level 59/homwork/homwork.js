// 1
let nums = [1, 15, 8, 22, 5, 30];

for (let n of nums) {
    if (n > 10) {
        console.log(n);
    }
}

// 2
let cities = ["თბილისი", "ქუთაისი", "ბათუმი"];

for (let city of cities) {
    console.log("მე ვცხოვრობ: " + city);
}

// 3
let names = ["Giorgi", "Nika", "Ana", "Luka"];

function checkName() {
    let input = document.getElementById("nameInput").value;
    let index = names.indexOf(input);

    document.getElementById("output").innerText = index;
}

// 4
let arr = [10, 20, 30, 40, 50];
console.log(arr[0] + arr[arr.length - 1]);

// 5
let numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// 6
let mixed = [10, -5, 3, -2, 8, -1];
let count = 0;

for (let num of mixed) {
    if (num < 0) {
        count++;
    }
}

console.log("უარყოფითი რიცხვები:", count);