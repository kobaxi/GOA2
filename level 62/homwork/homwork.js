// 1. Person Object

const person = {
    firstName: "Dato",
    lastName: "Kobaxidze",
    age: 16,
    birthDate: "2010-05-15",

    aging() {
        this.age++;
    },

    toString() {
        return `${this.firstName} ${this.lastName} დაიბადა ${this.birthDate} და არის ${this.age} წლის`;
    }
};

console.log(person.toString());
person.aging();
console.log(person.toString());


// 2. Warehouse Object

const warehouse = {
    name: "Main Warehouse",
    category: "Food",
    company: "ABC Company",
    status: "active",
    stock: 20,
    reserved: 0,

    updateStatus() {
        if (this.stock <= 0) {
            this.status = "out-of-stock";
        } else if (this.stock < 5) {
            this.status = "low-stock";
        } else {
            this.status = "active";
        }
    },

    restock(amount) {
        this.stock += amount;
        this.updateStatus();
    },

    reserve(amount) {
        if (amount > this.stock) {
            return false;
        }

        this.reserved += amount;
        return true;
    },

    available() {
        return this.stock - this.reserved;
    },

    toString() {
        return `სახელი: ${this.name}, ხელმისაწვდომი: ${this.available()}, სტატუსი: ${this.status}`;
    }
};

warehouse.reserve(5);
console.log(warehouse.available());
console.log(warehouse.toString());


// 3. Library Object

const Library = {
    books: [],
    borrowed: {},
    nId: 1,

    addBook(title, author, year) {
        const book = {
            title,
            author,
            year,
            id: this.nId++
        };

        this.books.push(book);
        console.log("წიგნი დაემატა");
    },

    findBook(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                console.log(this.books[i]);
                return;
            }
        }

        console.log("წიგნი ვერ მოიძებნა");
    },

    borrowBook(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {

                if (this.borrowed[id]) {
                    console.log("წიგნი უკვე აღებულია");
                } else {
                    this.borrowed[id] = true;
                    console.log("წიგნი აღებულია");
                }

                return;
            }
        }

        console.log("წიგნი ვერ მოიძებნა");
    }
};


Library.addBook("Harry Potter", "J.K. Rowling", 1997);
Library.addBook("The Hobbit", "J.R.R. Tolkien", 1937);

Library.findBook(1);

Library.borrowBook(1);
Library.borrowBook(1);