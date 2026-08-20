// 1
let name;
let nameForGreeting = name || "guest";
console.log(`hello ${nameForGreeting}, how you doing?`);
// 2
let name2 = "Giorgi";

name2.length === 6
    ? console.log("medium length")
    : name2.length > 6
        ? console.log("long length")
        : console.log("short name");
// 3
let city = "sachxere"
switch(city){
    case "tbilisi":
    console.log("shen cxovrob tbilisshi")
    break
    case "qutaisi":
    console.log("shen cxovrob qutaisi")
    break
    case "batumi":
    console.log("shen cxovrob batumi")
    break
    default:
        console.log("shen cxovrob sachxere")
}