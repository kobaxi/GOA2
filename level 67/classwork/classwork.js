function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [12, 5, 78, 45, 11, 8, 34];
let target = 11;

let result = linearSearch(arr, target);

if (result !== -1) {
    console.log("ნაპოვნია ინდექსზე:", result);
} else {
    console.log("ელემენტი ვერ მოიძებნა");
}