// 1) map()
// ყველა ფასი გადაიყვანეთ ფორმატში: "$17", "$18"...

const prices = [17, 18, 20, 78, 5, 90];

const newPrices = prices.map(function(price) {
    return "$" + price;
});

console.log(newPrices);


// 2) filter()
// დატოვეთ მხოლოდ VIP მომხმარებლები

const users = ["vip", "regular", "regular", "vip", "vip"];

const vipUsers = users.filter(function(user) {
    return user === "vip";
});

console.log(vipUsers);


// 3) reduce()
// დააჯამეთ ყველა ხელფასი

const paycheck = [25.60, 5.75, 120.00, 60.00];

const total = paycheck.reduce(function(sum, money) {
    return sum + money;
}, 0);

console.log(total);


// 4) map()
// გამოიტანეთ მხოლოდ email-ები

const users2 = [
    {id: 1, name: "gio", email: "example1@email.com"},
    {id: 2, name: "luka", email: "example2@yahoo.com"},
    {id: 3, name: "tako", email: "example3@email.com"}
];

const emails = users2.map(function(user) {
    return user.email;
});

console.log(emails);