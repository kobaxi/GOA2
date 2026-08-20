let container = document.getElementById("container");

// 1) "გამარჯობა" სათაურის დამატება
let heading1 = document.createElement("h1");
heading1.textContent = "გამარჯობა";
container.appendChild(heading1);

// 2) მასივის ყველა ელემენტისთვის h1
const textContents = ["hi", "bye", "hello", "world"];

for (let i = 0; i < textContents.length; i++) {
    let heading = document.createElement("h1");
    heading.textContent = textContents[i];
    container.appendChild(heading);
}

// 3) ასაკის შემოწმება
let input = prompt("Enter your age");
let ageHeading = document.createElement("h1");

if (Number(input) < 18) {
    ageHeading.textContent = "You are underage, access restricted";
    ageHeading.classList.add("underage");
} else {
    ageHeading.textContent = "Welcome";
    ageHeading.classList.add("adult");
}

container.appendChild(ageHeading);

// 4) ფოტოების დამატება
const urls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXY2APMDMn6zlF2610Czj-ThZORVa4SVgVuXmcTe2OvA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8GYp2oLaaMjY01xfHhtBN3lrZWIiBucYbFjyOq7Mqg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinsB3DBmEtu84HJGarMPXqmTR4Z5pgYXj6Um8r27hAA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNP928Gf0sqVBiXGEaVd-NoPGXmUrMP9EDVVmq_qRUjQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxXfqEDDR06OLnQfpy1FxD26TPPGgKHRKIN9j0BVQkw&s=10"
];

for (let i = 0; i < urls.length; i++) {
    let img = document.createElement("img");

    img.src = urls[i];

    container.appendChild(img);
}