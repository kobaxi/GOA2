// 1
function helloWorld() {
    return "Hello World";
}

console.log(helloWorld());


// 2
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Gio"));


// 3
function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(5));


// 4
function area(width, height) {
    return width * height;
}

console.log(area(10, 5));


// 5
function isHot(temperature) {
    return temperature > 30;
}

console.log(isHot(35));


// 6
function getEvenNumbers(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));


// 7
function checkAge(age) {
    if (age < 18) {
        return "too young";
    }

    return "come in";
}

console.log(checkAge(20));


// 8
const cat = {
    name: "Tom",
    age: 3,
    friendly: true
};


// 9
console.log(cat.name);
console.log(cat.age);
console.log(cat.friendly);


// 10
const car = {
    model: "Honda Civic",
    year: 2018
};

console.log(`მე ვატარებ ${car.year} წლის ${car.model}-ს.`);


// 11
function describePet(pet) {
    return `${pet.name} არის ${pet.age} წლის და მეგობრულია: ${pet.friendly}`;
}

console.log(describePet(cat));


// 12
const car2 = {
    model: "BMW",
    year: 2022,
    engineOn: false,

    startEngine() {
        this.engineOn = true;
    }
};

console.log(car2.engineOn);

car2.startEngine();

console.log(car2.engineOn);