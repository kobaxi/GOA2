// 1
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "ლუწია";
    } else {
        return "კენტია";
    }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));

// 2
function powerNumber(num) {
    if (num >= 0) {
        return num * num; 
    } else {
        return num * num * num; 
    }
}

console.log(powerNumber(3)); 
console.log(powerNumber(-2)); 

// 3
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([1,2,10,-20,30,100,5]));