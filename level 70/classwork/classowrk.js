// 1) ფუნქცია, რომელიც ამოწმებს რიცხვი კენტია თუ ლუწი
function checkNumber(num) {
    if (num % 2 === 0) {
        return "ლუწია";
    }
    return "კენტია";
}

console.log(checkNumber(10));
console.log(checkNumber(7));


// 2) ფუნქცია, რომელიც სიიდან პოულობს ყველაზე დიდ რიცხვს
function findMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMax([5, 12, 3, 20, 8]));