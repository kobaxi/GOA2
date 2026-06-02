// მანქანის ობიექტი
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "შავი",
    speed: 0
};

// დამატებითი property-ები (აგებულებასთან დაკავშირებული)
car.engine = "V6";          // ძრავი
car.transmission = "Automatic"; // გადაცემათა კოლოფი

// ფუნქცია: აჩქრება
car.accelerate = function () {
    this.speed += 10;
};

// ფუნქცია: შენელება
car.decelerate = function () {
    this.speed -= 10;
    if (this.speed < 10) {
        this.speed = 0;
    }
};

// ფუნქცია: ტექსტის დაბრუნება
car.toString = function () {
    return `მანქანა ${this.brand}, ${this.model}, გამოიშვა ${this.year} წელს და არის ${this.color} ფერის.`;
};


// ტესტი+
car.accelerate();
car.accelerate();
console.log(car.speed); // 20

car.decelerate();
console.log(car.speed); // 10

car.decelerate();
console.log(car.speed); // 0

console.log(car.toString());