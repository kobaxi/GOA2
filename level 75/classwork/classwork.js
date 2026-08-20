// 1) შექმენით ცარიელი სია და for loop-ით დაამატეთ რიცხვები 1-დან 20-მდე.

let arr1 = [];

for (let i = 1; i <= 20; i++) {
    arr1.push(i);
}

console.log(arr1);


// 2) შექმენით მასივი 1-დან 20-მდე, დაამატეთ სტრინგი და ამოშალეთ ბოლო ელემენტი.

let arr2 = [];

for (let i = 1; i <= 20; i++) {
    arr2.push(i);
}

arr2.push("Hello");
arr2.pop();

console.log(arr2);


// 3) გაქვთ მასივი [1,2,3].
// დაამატეთ დასაწყისში "Hello", შემდეგ "python" და ბოლოს წაშალეთ პირველი ელემენტი.

let arr3 = [1, 2, 3];

arr3.unshift("Hello");
arr3.push("python");
arr3.shift();

console.log(arr3);


// 4) შექმენით ცარიელი სია და დაამატეთ მხოლოდ ლუწი რიცხვები 1-დან 20-მდე.
// შემდეგ გამოიტანეთ 2 ინდექსიდან 5 ინდექსამდე.

let arr4 = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        arr4.push(i);
    }
}

console.log(arr4.slice(2, 6));


// 5) შექმენით სია და დაამატეთ სტრინგი.
// შემდეგ შეამოწმეთ არის თუ არა "js" სიაში და რომელ ინდექსზეა.

let arr5 = ["hello", "world", "js", "html", "css"];

arr5.push("python");

console.log(arr5);

if (arr5.includes("js")) {
    console.log("js არსებობს");
    console.log("ინდექსია:", arr5.indexOf("js"));
} else {
    console.log("js არ არსებობს");
}


// 6) შექმენით Set 3 ელემენტით.
// დაამატეთ "Hello", წაშალეთ ერთი ელემენტი,
// შეამოწმეთ არის თუ არა "js" და გაზომეთ ზომა.

let mySet = new Set(["js", "html", "css"]);

mySet.add("Hello");
mySet.delete("html");

console.log(mySet.has("js"));
console.log(mySet.size);