// 1) ახსნა

// Math.round() -> ამრგვალებს უახლოეს მთელ რიცხვამდე
console.log(Math.round(5.6)); // 6

// Math.floor() -> ამრგვალებს ქვემოთ
console.log(Math.floor(5.9)); // 5

// Math.ceil() -> ამრგვალებს ზემოთ
console.log(Math.ceil(5.1)); // 6

// Math.trunc() -> აშორებს ათწილადს
console.log(Math.trunc(5.99)); // 5

// Math.pow() -> ხარისხში აყვანა
console.log(Math.pow(2, 3)); // 8

// Math.sqrt() -> ფესვი
console.log(Math.sqrt(25)); // 5

// Math.min() -> ყველაზე პატარა რიცხვი
console.log(Math.min(3, 1, 7)); // 1

// Math.max() -> ყველაზე დიდი რიცხვი
console.log(Math.max(3, 1, 7)); // 7



// 2) round

let arr1 = [1,2,3,5.5,6.2,10.1,7];

let sum1 = 0;

for(let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}

console.log(Math.round(sum1));



// 3) floor

let arr2 = [33,23,3,2.3,9.2,14.1,7];

let sum2 = 0;

for(let i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}

console.log(Math.floor(sum2));



// 4) ceil

let arr3 = [21,7,3,3.1,2.2,10.1,7];

let sum3 = 0;

for(let i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}

console.log(Math.ceil(sum3));



// 5) trunc

let arr4 = [1.0111,2.2229,5.01341,10.000003];

let sum4 = 0;

for(let i = 0; i < arr4.length; i++) {
  sum4 += arr4[i];
}

console.log(Math.trunc(sum4));



// 6) sqrt

let arr5 = [4,2,7,3];

let sum5 = 0;

for(let i = 0; i < arr5.length; i++) {
  sum5 += arr5[i];
}

console.log(Math.sqrt(sum5));



// 7) პირობები

let arr6 = [1,2,3,4,5,6,7,8,9,10,-5,-2,20,15,-20,7];

for(let i = 0; i < arr6.length; i++) {

  if(arr6[i] < 0) {
    console.log(Math.pow(arr6[i], 2));
  }

  else if(arr6[i] > 0 && arr6[i] < 10) {
    console.log(Math.pow(arr6[i], 3));
  }

  else {
    console.log(Math.pow(arr6[i], 5));
  }

}