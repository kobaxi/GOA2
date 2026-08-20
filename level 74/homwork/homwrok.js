// 1) რა არის switch, case, break, default?
// switch — გამოიყენება მაშინ, როცა ერთი ცვლადის მნიშვნელობა რამდენიმე ვარიანტს უნდა შევადაროთ.
// case — თითოეული შესაძლო მნიშვნელობაა, რომელსაც switch ამოწმებს.
// break — აჩერებს switch-ის მუშაობას, რათა სხვა case-ები აღარ შესრულდეს.
// default — შესრულდება მაშინ, როცა არცერთი case არ დაემთხვევა.

// 2)
let channel = 3;

switch (channel) {
    case 1:
        console.log("პირველი არხი");
        break;

    case 2:
        console.log("სეტანტა");
        break;

    case 3:
        console.log("ჯდს");
        break;

    case 4:
        console.log("ოპერა");
        break;

    case 5:
        console.log("სილკ-უნივერსალი");
        break;

    default:
        console.log("ასეთი არხი არ არსებობს");
}


// 3)
let brand = "Ferrari";

switch (brand) {
    case "Ferrari":
        console.log("Italia");
        break;

    case "Bmw":
        console.log("Germany");
        break;

    case "Toyota":
        console.log("Japan");
        break;

    case "Ford":
        console.log("USA");
        break;

    default:
        console.log("უცნობი ბრენდი");
}


// 4)
let weather = "rain";

switch (weather) {
    case "sun":
        console.log("გაიკეთე მზისდამცავი სათვალე");
        break;

    case "rain":
        console.log("აიღე ქოლგა");
        break;

    case "snow":
        console.log("გარეთ სიცივეა და ამიტომ თბილად ჩაიცვით");
        break;

    default:
        console.log("ამინდი უცნობია");
}


// 5)

let gear = 4;

switch (gear) {
    case 1:
        console.log("მანქანა ძალიან ნელა მოძრაობს");
        break;

    case 2:
        console.log("მანქანა ნელა მოძრაობს");
        break;

    case 3:
        console.log("მისი სიჩქარე საშუალო არის");
        break;

    case 4:
        console.log("სწრაფია");
        break;

    case 5:
        console.log("ძალიან სწრაფია");
        break;

    case 6:
        console.log("მისი მაქსიმალური სიჩქარე");
        break;

    default:
        console.log("არასწორი გადაცემა");
}
