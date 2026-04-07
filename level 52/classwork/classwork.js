// 1
let age = 18;

if (age >= 18) {
  console.log("შენ შეგიძლია ხმის მიცემა");
} else {
  console.log("შენ ჯერ არ შეგიძლია ხმის მიცემა");
}

// 2
let score = 67;

if (score >= 90) {
  console.log("A - ფრიადი");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score < 40) {
  console.log("F");
} else {
  console.log("საშუალო შედეგი");
}

// 3
let temp = 25;

if (temp >= 30) {
  console.log("ძალიან ცხელა, ფრთხილად იყავით");
} else if (temp >= 20 && temp <= 29) {
  console.log("კარგი ამინდია");
} else if (temp >= 10 && temp <= 19) {
  console.log("ცივა, თბილად ჩაიცვი");
} else {
  console.log("ძალიან ცივა, სახლში დარჩი");
}