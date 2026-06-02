// 1) for...of ციკლი
let fruits = ['vashli', 'banani', 'atami'];

for (let item of fruits) {
  console.log(item);
}



let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}


let numbers = [2, 4, 6, 8];
let sum = 0;
let j = 0;

do {
  sum += numbers[j];
  j++;
} while (j < numbers.length);

console.log("ჯამი:", sum);