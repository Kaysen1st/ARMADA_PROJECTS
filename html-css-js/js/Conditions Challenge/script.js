//Task 1
let score = 50;
if (score >=90 && score <= 100) {
    console.log("A")
} else if (score >=80 && score <= 89) {
    console.log("B")
} else if (score >=70 && score <= 79) {
    console.log("C")
} else if (score >=60 && score <= 69) {
    console.log("D")
} else{
    console.log("F")
}

//Task 2

let temperature = 15;
if (temperature < 0) {
    console.log("It frezzing outside! Bundle up!")
} else if (temperature >= 0 && temperature <= 15) {
    console.log("it's cold outside! ware a jacket.")
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice, enjoy your day!")
} else if (temperature > 30){
    console.log("It's hot outside. Stay hydrated!")

}

//Task 3

let age = 14;
if (age >= 0 && age <= 12) {
    console.log("you are too young for this activity")
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission")
}else if (age >= 18){
    console.log("You are eligible fot this activity")
}
//Task 4
const age1 = 15;
const isMember = true;
if (age1 >= 0 && age1 <= 11){
    console.log("the ticket is free")
}else if (age1 >= 12 && isMember === true){
    console.log("the ticket is $10")
}else if (age1 >= 12  && isMember === false){
    console.log("the ticket is $15")
}
//Task 5
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;}
    if (year % 100 === 0) {
        return false;}
    if (year % 4 === 0) {
        return true;}
}
const year = 1800;
if (isLeapYear(year)) {
    console.log(year + ' is a leap year.');
} else {
    console.log(year + ' is not a leap year.');
}


