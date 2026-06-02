// 1
function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("Giorgi");


// 2
function findMin(arr) {
    let min = arr[0];

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

console.log(findMin([2, 10, -20, 100, 90, 50, 40]));


// 3
function checkNumbers(arr) {
    for (let num of arr) {
        if (num === 0) {
            console.log("Zero");
        } else if (num % 2 === 0) {
            console.log(num ** 3);
        } else {
            console.log(num ** 2);
        }
    }
}

checkNumbers([1, 2, 0, 3, 4]);


// 4
function finalPrice(price, discount) {
    return price - (price * discount) / 100;
}

console.log(finalPrice(100, 20));


// 5
function sumOddEven(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num ** 2;
        } else {
            oddSum += num ** 3;
        }
    }

    console.log("Even sum (squared):", evenSum);
    console.log("Odd sum (cubed):", oddSum);
}

sumOddEven([1,2,3,4,5,6,7,8,9,10]);