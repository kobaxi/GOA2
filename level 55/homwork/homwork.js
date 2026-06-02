
// 1
let arr1 = [1,2,3,4,5];
for (let num of arr1) {
    console.log(num * 2);
}

// 2
let arr2 = [10,15,20,25];
for (let num of arr2) {
    if (num > 18) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

// 3
let arr3 = [3,6,9,12];
let sum = 0;
for (let num of arr3) {
    sum += num;
}
console.log(sum);

// 4
let arr4 = [2,4,6,8];
for (let num of arr4) {
    console.log(num % 4 === 0);
}

// 5
let arr5 = [7,14,21,28];
for (let num of arr5) {
    console.log(num / 7);
}

// 6
let arr6 = [1,3,5,7];
let count = 0;
for (let num of arr6) {
    if (num % 2 !== 0) {
        count++;
    }
}
console.log(count);

// 7
let arr7 = [2,5,8,11];
for (let num of arr7) {
    if (num < 6) {
        console.log("low");
    } else {
        console.log("high");
    }
}

// 8
let arr8 = [4,9,16,25];
for (let num of arr8) {
    console.log(Math.sqrt(num));
}

// 9
let arr9 = [100,200,300];
for (let num of arr9) {
    console.log(num / 10);
}

// 10
let arr10 = [1,2,3,4,5];
for (let num of arr10) {
    if (num % 2 === 0) {
        console.log(num);
    }
}