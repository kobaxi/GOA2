// function negative_Positive(nums){
//     let negative = []
//     let positive = []
//     for(let i = 0;i < nums.length;i++){
//         if(nums[i] > 0){
//             positive.push(nums[i])}
//         else{
//             negative.push(nums[i])
//         }
//     }
//     return negative , positive
// }
// console.log(negative_Positive([1,2,-5,-10,4,3,11,-400,20 ]))



// function check(nums){
//     let even = []
//     let odd = []
//     for(let i = 0;i < nums.length;i++){
//         if(i % 2 == 0){
//             even.push(nums[i])
//         }else{
//             odd.push(nums[i])
//         }
//     }
//     return even , odd
// }
// console.log(check([1,2,3,4,5,6,7,8,9,10]))



// 5
// function add(nums){
//     nums = []
//     for(let i = 0; i < nums.length;i++)

// }

// // 6
// function calculator(nums){
//     let sum = 0
//     for(let i = 0; i < nums.length;i++){
//         return 
//     }
// }
// 1
// function word(){
//     console.log("hello world")
// }
// word("hello world")

// // 2
// function how_much(age){
//     console.log("Im" ,age)
// }
// how_much(14)

// // 3
// function about_me(name,age,city){
//     console.log("my name is" , name ,"im",age,"im from" ,city)
// }
// how_much("dato",14,"sachxere")

// //4
// function full_num(num1, num2){
//     sum = num1 + num2
//     console.log(sum)
// }
// console.log(full_num(10,30))

// //5
// function numbers(){
//     for(let i = 0;i < 11;i++){
//         return i
//     }
// }
// console.log(numbers())

// //6
// function odd(nums){
//     for(let i = 0;i < nums.length;i++){
//         if(nums[i] % 2 == 0){
//             return nums[i]
//         }
//     }
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

// //7
// function find(nums){
//     let positive = []
//     for(let i = 0; i < nums.length;i++){
//         if(nums[i] > 0){
//             positive.push(nums[i])
//         }
//     }
//     return positive
// }
// console.log(find([1,2,-5,-3,-2,10,-7]))

// // 8
// let a = 0;
// do{
//     console.log(a)
//     a++
// }while(a < 20)

// // 9
// let a = 0;
// do{
//     console.log(a * 2)
//     a++
// }while(a < 10)

// // 10

// // 1)
// let set1 = new Set();

// set1.add("apple");
// set1.add("banana");
// set1.add("orange");
// set1.add("grape");
// set1.add("melon");

// console.log(set1);

// // 2)
// let set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// set2.delete(10);

// console.log(set2);

// // 3)
// let set3 = new Set(["html", "css"]);

// set3.add("js");
// set3.add("python");

// set3.delete("python");

// console.log(set3.has("js"));

// // 4)
// let set4 = new Set([1, 2, 3, 4, 5]);

// set4.delete(1);

// console.log(set4.has(5));
// console.log(set4.size);

// // 5)
// let set5 = new Set();

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         set5.add(i);
//     }
// }

// set5.delete(10);

// if (set5.has(6)) {
//     console.log(set5.size);
// }



























// 1) რას შვება map
// მაპი ფორ ლუპის მსაგვსია მაგრამ იგი პირობას გადაუვლის და გამოიტანს როგორც ფორ ლუპი
// 2) ახსენი რა არის და რას შვება filter?
//ფილტერი არის ისეთი ფუნქცია რომელიც პირობას იმ შემტხვევაში გამოაქვს როცა პირობა არის მართალი და საბოლოთ გამოვა მხოლოდ თრუ პასუხი
// 3) ახსენი რა არის და რას შვება reduce?
// რედიუსი სია-ში მოცემულ ჯამს რიცხვზე კრიბას მაგალითად 1,2,3 ამ დროს 1 დაუმატებს 2 და გამოვა სამი ხოლო სამს დაუმატებს სამს


// 5) მაგალიტი პირველი map-ზე
let nums = [1,2,3,4,5,6,7,8,9,10];
function sum(num){
    return nums *2
}
const new_nums = nums.map(sum)
console.log(new_nums)

// 6) მაგალიტი მეორე filter-ზე
let nums1 = [1,2,3,4,5,6,7,8,9,10];
function sum(num){
    return nums1 % 2 === 0
}
const new_nums1 = nums1.filter(sum)
console.log(new_nums1)

// 7) მაგალიტი მესამე reduce-ზე
let nums2 = [1,2,3,4,5,6,7,8,9,10];
function full(ჯამი , რიცხვი){
    return ჯამი + რიცხვი
}
const new_nums2 = nums2.reduce(full)
console.log(new_nums2)









