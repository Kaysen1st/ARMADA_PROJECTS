//Task 1
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " +(number * i));
}

//Task 2
const n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " numbers is: " + sum);

//task 3
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//task 4
let n1 = 5;
for (let i = 1; i <= n1; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star);
}

//task 5
let array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}