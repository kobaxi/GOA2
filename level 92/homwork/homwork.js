// 1
let score = 87;

let result1 = score >= 90 ? "Excellent" :
              score >= 75 ? "Very Good" :
              score >= 60 ? "Good" :
              score >= 40 ? "Passed" :
              "Failed";

console.log(result1);


// 2
let age = 20;
let isStudent = true;

let result2 = age >= 65 ? "Senior" :
              age < 18 ? "Minor" :
              isStudent ? "Adult Student" :
              "Adult";

console.log(result2);


// 3
let number = -14;

let result3 = number > 0
    ? (number % 2 === 0 ? "Positive Even" : "Positive Odd")
    : number < 0
    ? "Negative"
    : "Zero";

console.log(result3);


// 4
let username = "adminGoga";

let result4 = username === "" ? "Username is empty" :
              username.startsWith("admin") ? "Admin" :
              username.startsWith("user") ? "User" :
              "Unknown user";

console.log(result4);


// 5
let temperature = 28;

let result5 = temperature < 0 ? "Freezing" :
              temperature <= 10 ? "Cold" :
              temperature <= 20 ? "Cool" :
              temperature <= 30 ? "Warm" :
              "Hot";

console.log(result5);


// 6
let a = 45;
let b = 78;
let c = 32;

let biggest = a > b
    ? (a > c ? a : c)
    : (b > c ? b : c);

console.log(biggest);


// 7
let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// 8
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Passed");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid grade");
        break;
}


// 9
let month = 8;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}


// 10
let x = 20;
let y = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(x + y);
        break;
    case "-":
        console.log(x - y);
        break;
    case "*":
        console.log(x * y);
        break;
    case "/":
        console.log(x / y);
        break;
    case "%":
        console.log(x % y);
        break;
    default:
        console.log("Invalid operator");
}


// 11
let action = "withdraw";
let balance = 500;
let amount = 200;

switch (action) {
    case "balance":
        console.log("Balance:", balance);
        break;

    case "deposit":
        balance += amount;
        console.log("Balance:", balance);
        break;

    case "withdraw":
        if (amount > balance) {
            console.log("Insufficient balance");
        } else {
            balance -= amount;
            console.log("Balance:", balance);
        }
        break;

    case "exit":
        console.log("Goodbye");
        break;

    default:
        console.log("Invalid action");
}