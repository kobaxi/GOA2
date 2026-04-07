// სავარჯიშო 1: ასაკი
let age = 27;

if (age < 18) {
    console.log("შენ ჯერ არასრულწლოვანი ხარ");
} else if (age >= 18 && age <= 65) {
    console.log("შენ სრულწლოვანი ხარ");
} else {
    console.log("შენ პენსიონერი ხარ");
}


// სავარჯიშო 2: ლოგინი
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("მოგესალმებით, მიხარია რომ დაბრუნდით!");
} else if (username === "admin" && password !== "12345") {
    console.log("პაროლი არასწორია!");
} else {
    console.log("მომხმარებელი ვერ მოიძებნა!");
}


// სავარჯიშო 3: AND (&&)
let hasID = true;

if (age >= 18 && hasID) {
    console.log("შეგიძლია შესვლა (AND მაგალითი)");
}


// სავარჯიშო 4: AND + OR ერთად
let hasPermission = true;

if (age >= 18 || (hasPermission && age >= 16)) {
    console.log("შესვლა შესაძლებელია (AND + OR)");
}


// სავარჯიშო 5: NOT (!)
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("გთხოვ გაიარო ავტორიზაცია");
}