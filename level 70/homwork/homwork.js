//1) დაწერე ფუნქცია სადაც გექნება 2 პარამეტრი name და lastname და გამოიტანე იგი ერთად.
function username(name,lastname){
    let(name , lastname)
}
console.log(name("dato"),lastname("kobaxidze"))

//2) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული მასივი და უნდა დაითვალო მაგ რიცხვების ჯამი
function findnumbers(arr){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] == i.length)
            return arr
    }
}
console.log(findnumbers([1,2,3,4,5,6,7,8,9,10]))

//3) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული რაიმე მასივი სადაც დადებითი რიცხვებიც არის და უარყოფითი და შენი მიზანია დაითვალო დადებითის ჯამი და უარყოფითის ჯამი
function negative_Positive(nums){
    let negative = []
    let positive = []
    for(let i = 0;i < nums.length;i++){
        if(nums[i] > 0){
            positive.push(nums[i])}
        else{
            negative.push(nums[i])
        }
    }
    return negative , positive
}
console.log(negative_Positive([1,2,-5,-10,4,3,11,-400,20 ]))

//5) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული ხილების მასივი და თუ ხილის ასოების რაოდენობა მეტია 6 მაგ შემთხვევაში გამოიტანე იგი
function fruits(arr){
    for(let i = 0;i < arr.length;i++){
        if(arr[i].length > 6){
            console.log(arr[i])
        }
    }
}
console.log(fruits(["orange , apple , bannana"]))

//6) დაწერე ფუნქცია სადაც პარამეტრად გექნება 2 მასივი პირველი სადაც გექნება მარტო ლუწი რიცხვები და მეორე სადაც იქნება უარყოფითი რიცხვები და შენი მიზანია დაითვალო მათი საერთო ჯამი.
function even_negative(nums){
    let even = []
    let negative = []
    for(let i = 0;i < nums.length;i++){
        if(nums[i] % 2 == 0){
            even.push(nums[i])
        }
        else if(nums[i] < 0){
            negative.push(nums[i])
        }
    }
}
console.log(even_negative([1,2,3,4,5,-6,-7,-8,-9,-10]))

//7) ახსენი მთლიანად ფუნქცია თუ რა ნაწილებად იყოფა იგი.