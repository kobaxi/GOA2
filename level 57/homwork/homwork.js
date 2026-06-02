// 1
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 2
let cities = ['kutaisi', 'xashuri', 'gori'];

for (let city of cities) {
    console.log(city.toUpperCase());
}

// 3
let num = 50;

while (num > 0) {
    console.log(num);
    num -= 10;
}

// 4
let i = 5;

do {
    console.log(i);
    i++;
} while (i <= 15);

// 5
let word = "vashlunia";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// 6
let fruits = ['vashli', 'atami', 'yurdzeni'];
let j = fruits.length - 1;

do {
    console.log(fruits[j]);
    j--;
} while (j >= 0);