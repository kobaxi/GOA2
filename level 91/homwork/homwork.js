// // 1
// let age = 16;

// if (age >= 0 && age <= 12) {
//     console.log("ბავშვი");
// } else if (age <= 17) {
//     console.log("მოზარდი");
// } else if (age <= 59) {
//     console.log("ზრდასრული");
// } else if (age >= 60) {
//     console.log("პენსიონერი");
// } else {
//     console.log("არასწორი ასაკი");
// }


// // 2
// let number = -7;

// if (number > 0) {
//     console.log("დადებითი");
// } else if (number < 0) {
//     console.log("უარყოფითი");
// } else {
//     console.log("ნულია");
// }


// // 3
// let age2 = 20;
// let price = 150;
// let isStudent = true;

// if (price > 100 && isStudent) {
//     console.log("30% discount");
// } else if (price > 100 || age2 < 18) {
//     console.log("20% discount");
// } else if (age2 >= 60) {
//     console.log("15% discount");
// } else {
//     console.log("No discount");
// }


// 4
let username = "adminGoga";

if (!username) {
    console.log("Username is empty");
} else if (username.startsWith("admin")) {
    console.log("Admin");
} else if (username.startsWith("user")) {
    console.log("User");
} else {
    console.log("Unknown user");
}


// // 5
// let password = "JavaScript";

// if (!password) {
//     console.log("Password is empty");
// } else if (password.length < 6) {
//     console.log("Too short");
// } else if (password.length <= 10) {
//     console.log("Medium password");
// } else {
//     console.log("Strong password");
// }


// // 6
// let city = "TBILISI";

// city = city.toLowerCase();

// if (city === "tbilisi") {
//     console.log("თბილისი");
// } else if (city === "batumi") {
//     console.log("ბათუმი");
// } else if (city === "kutaisi") {
//     console.log("ქუთაისი");
// } else {
//     console.log("უცნობი ქალაქი");
// }


// // 7
// let age3 = 19;
// let isStudent2 = true;

// if (age3 < 0) {
//     console.log("Invalid age");
// } else if (age3 < 18) {
//     console.log("Minor");
// } else if (age3 >= 18 && isStudent2) {
//     console.log("Adult student");
// } else if (age3 >= 18 && !isStudent2) {
//     console.log("Adult");
// }


// // 8
// let username2 = "User123";

// if (!username2) {
//     console.log("Empty");
// } else if (username2.startsWith("admin") && username2.length > 10) {
//     console.log("Strong admin username");
// } else if (username2.startsWith("user")) {
//     console.log("Regular user");
// } else if (username2.length < 5) {
//     console.log("Too short");
// } else {
//     console.log("Valid username");
// }


// // 9
// let username3 = "ADMIN_GOGA";
// let age4 = 25;
// let isActive = true;

// if (!username3) {
//     console.log("No username");
// } else {
//     username3 = username3.toLowerCase();

//     if (username3.startsWith("admin") && age4 >= 18 && isActive) {
//         console.log("Admin access");
//     } else if (username3.startsWith("user") && age4 >= 18) {
//         console.log("User access");
//     } else if (age4 < 18) {
//         console.log("Access denied");
//     } else {
//         console.log("Unknown account");
//     }
// }