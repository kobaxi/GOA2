// სავარჯიშო 1
let age = 27;

if (age < 18) {
    console.log("შენ ჯერ არასრულწლოვანი ხარ");
} else if (age >= 18 && age <= 65) {
    console.log("შენ სრულწლოვანი ხარ");
} else {
    console.log("შენ პენსიონერი ხარ");
}


// სავარჯიშო 2
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("მოგესალმებით, მიხარია რომ დაბრუნდით!");
} else if (username === "admin" && password !== "12345") {
    console.log("პაროლი არასწორია!");
} else {
    console.log("მომხმარებელი ვერ მოიძებნა!");
}


// სავარჯიშო 3
let num = 20;

if (num > 10 && num < 30) {
    console.log("რიცხვი 10-ზე მეტია და 30-ზე ნაკლები");
}


// სავარჯიშო 4
let hasID = true;

if ((age > 18 && hasID) || age > 60) {
    console.log("შესვლა დაშვებულია");
}


// სავარჯიშო 5: ! (NOT)
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("გთხოვთ გაიაროთ ავტორიზაცია");
}