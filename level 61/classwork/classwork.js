//1) round – ამრგვალებს უახლოეს მთელ რიცხვამდე
console.log(Math.round(9.5));

//2) floor – ამრგვალებს ქვემოთ
console.log(Math.floor(9.8));

//3) ceil – ამრგვალებს ზემოთ
console.log(Math.ceil(9.2));

//4) sqrt – კვადრატული ფესვი
console.log(Math.sqrt(49));

//5) ლუწი რიცხვების კუბი
let arr = [1,2,3,4,5,6,7,8,9,10];

for (let num of arr) {
    if (num % 2 === 0) {
        console.log(Math.pow(num, 3));
    }
}