/*let frenchFries = Number(
  prompt("do you want to order frenchfries (price = 60)")
);

let burgers = Number(prompt("do you want to order burgers (price = 50)"));

let platesOfChowmi = Number(
  prompt("do you want to order plates of chowmi (price = 100)")
);

let platesOfManchurian = Number(
  prompt("do you want to order plates of Manchurian (price = 80) ")
);

let Cokes = Number(prompt("do you want to order Cokes (price = 50)"));

let Bill = 0;
Bill =
  frenchFries * 60 +
  burgers * 50 +
  platesOfChowmi * 100 +
  platesOfManchurian * 80 +
  Cokes * 50;

alert("Your bill = " + Bill);
//--------------answer2 --------------------//

for (let i = 7; i >= 1; i--) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    if (j % 3 === 1) {
      a += "$";
    } else {
      a += "#";
    }
  }
  console.log(a);
}
//---------------answer3-----------------------//
let numberOfSeries = Number(
  prompt(
    "How many times do you want to print this Series (2, 6, 30, 260, 3130)"
  )
);
let series = "2," + "6," + "30," + "260," + "3130";
let a = "";
for (let j = 1; j <= numberOfSeries; j++) {
  a = a + series;
}
document.write(a + "<br>");
//---------------------------answer4---------------//
//--------------------------answer5---------------//

let birthYear = prompt("What is your birth year?");
let age = 2023 - birthYear;

if (age > 18) {
  if (confirm("Do you have valid license number?")) {
    let licenseNumber = prompt("Please enter your license number:");
    alert("User with license number " + licenseNumber + " is ready to drive.");
  } else {
    alert("You need a valid license to drive.");
  }
} else if (age < 18) {
  if (confirm("Do you have guardians?")) {
    let guardianName = prompt("Please enter your guardian's name:");
    alert("You are ready to drive with your " + guardianName + ".");
  } else {
    alert("Sorry, visit again please.");
  }
}*/
//   --------------------answer6//
let firstNumber = Number(prompt("enter any number"));
let secondNumber = 19;
let subtracting = firstNumber - secondNumber;
if (subtracting > 19) {
  console.log(3 * subtracting);
} else 2 * subtracting;
//------------------answer10----------------//

let text = "my name is khan";
let a = text.length;
if (a >= 10) {
  for (let i = 1; i <= a; i++) console.log(i);
} else {
  console.log("no");
}
//   --------------------answer7--------------------------/

let firstInteger = -2;
let secondInteger = 4;
if (
  (firstInteger > 1 || secondInteger < 1) &&
  (secondInteger > 1 || firstInteger < 1)
) {
  console.log(firstInteger + secondInteger);
} else {
  console.log(firstInteger * secondInteger);
}
