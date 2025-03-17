function customFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]

//task 2

function countdown(start, callback) {
    if (start < 0) {
        return;
    } else {
        callback(start);
        setTimeout(() => countdown(start - 1, callback), 1000);
    }
}


function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

//task 3
function createButton(buttonText, callback) {
    let button = document.getElementById("myButton")
    button.textContent = buttonText;
    button.addEventListener("click", callback);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

//task 4
function runTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        setTimeout(() => tasks[i](), i * 1000);

    }

}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);

//task 5
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = "4";
    let isCorrect = userAnswer === correctAnswer;
    console.log(question);
    console.log(choices);
    console.log(userAnswer);
    callback(isCorrect);

}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);