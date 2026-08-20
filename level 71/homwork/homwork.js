// 1
let person = {
    name: "Dato",
    lastname: "Kobaxidze",
    age: 16
};

// 2
let countries = {
    Georgia: "Tbilisi",
    France: "Paris",
    Germany: "Berlin"
};

// 3
let car = {
    model: "BMW M5",
    engine: "4.4 V8",
    year: 2022,
    color: "Black"
};

car.model = "Mercedes C63";

// 4
let animals = {
    animal1: "Lion",
    animal2: "Tiger",
    animal3: "Elephant",
    animal4: "Wolf"
};

// 5
let fruits = {
    apple: 3,
    banana: 4,
    orange: 5
};

// 6
let computer = {
    cpu: "Intel Core i9",
    gpu: "RTX 4090",
    ram: "32GB",
    storage: "1TB SSD"
};

// 7
let movies = {
    top1: "The Shawshank Redemption",
    top2: "The Godfather",
    top3: "The Dark Knight",
    top4: "Inception",
    top5: "Interstellar"
};

// 8
let user = {
    name: "Dato",
    sayHi() {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
    }
};

user.sayHi();

// 9
let calc = {
    num1: 10,
    num2: 20,
    result1: 0,
    result2: 0,

    plus() {
        this.result1 = this.num1 + this.num2;
    },

    minus() {
        this.result2 = this.num2 - this.num1;
    },

    ToString() {
        console.log(`ჯამი: ${this.result1}`);
        console.log(`სხვაობა: ${this.result2}`);
    }
};

calc.plus();
calc.minus();
calc.ToString();

// 10
let car2 = {
    model: "BMW M3",
    engine: 3.0,
    horsepower: 480,

    upgrade() {
        this.engine += 2.0;
        this.horsepower += 300;
    },

    ToString() {
        console.log(
            `მოდელი: ${this.model}, ძრავი: ${this.engine}, ცხენის ძალა: ${this.horsepower}`
        );
    }
};

car2.upgrade();
car2.ToString();