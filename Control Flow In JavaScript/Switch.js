// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const Month = 2;
switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("No Case Matched");
        break;
}
// in switch if one case matches and other cases are written after it without the use of break statement then all cases will execute