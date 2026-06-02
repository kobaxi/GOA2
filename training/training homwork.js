// 1. რიცხვები 1-დან 5-მდე
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. ლუწი რიცხვები
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 2. რიცხვების ჯამის გამოთვლა
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

// 1. ასაკის შემოწმება
function adult(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(adult(16));

// 2. რიცხვის დადებითის შემოწმება
function positive(num) {
    if (num > 0) {
        return "Positive";
    } else {
        return "Not positive";
    }
}

console.log(positive(-5));