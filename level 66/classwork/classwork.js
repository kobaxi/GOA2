+function LicensePlate(plateNum) {
    return {
        plateNum: plateNum
    };
}

function CreateCar(manufacturer, model, year, plateNum) {
    return {
        manufacturer: manufacturer,
        model: model,
        year: year,
        plate: LicensePlate(plateNum)
    };
}

const CarPark = {
    capacity: 10,
    parkedCars: [],

    Park(car) {
        if (this.parkedCars.length >= this.capacity) {
            return false;
        }

        let exists = this.parkedCars.find(
            c => c.plate.plateNum === car.plate.plateNum
        );

        if (exists) {
            return "ისედაც დგას";
        }

        this.parkedCars.push(car);
        return true;
    },

    UnPark(plateNum) {
        let index = this.parkedCars.findIndex(
            c => c.plate.plateNum === plateNum
        );

        if (index === -1) {
            return false;
        }

        this.parkedCars.splice(index, 1);
        return true;
    }
};

const car1 = CreateCar("BMW", "M5", 2020, "AA11AA");
const car2 = CreateCar("Merceds", "C3", 2021, "BB22BB");

console.log(CarPark.Park(car1)); 
console.log(CarPark.Park(car1));

console.log(CarPark.Park(car2));

console.log(CarPark.UnPark("AA-111-AA"));
console.log(CarPark.UnPark("CC-333-CC"));

console.log(CarPark.parkedCars);