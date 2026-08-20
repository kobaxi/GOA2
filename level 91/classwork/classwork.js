// 1)
let number = 5;
if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero");
}


// 2)
let name = "Giorgi";
if (name === "Dato") {
    console.log("we have same name");
} else {
    console.log("we do not have same name");
}
// 3)
let number = 8;

if (number > 0 && number % 2 === 0) {
    console.log("positive and even");
} else {
    console.log("other number");
}


// 4)
let name = "dato";

if (name.startsWith("g") || name === "levani") {
    console.log("good name");
} else if (name.startsWith("a") && name === "akaki") {
    console.log("excellent name");
} else {
    console.log("other name");
}