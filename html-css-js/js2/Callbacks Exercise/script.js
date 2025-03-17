function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Examples of usage:
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(5, 3, subtract)); // Output: 2
console.log(calculate(6, 2, divide)); // Output: 3

//task 2
function delayedMessage(message, delay, callback, initialcallback) {
    if (initialcallback) {
        initialcallback(message);
    }

    setTimeout(() => {
        callback(message);
    }, delay);
}
delayedMessage(
    "Hello, world!",
    2000,
    function (msg) {
        console.log("Delayedmessage: ", msg);
    },
    function (msg) {
        console.log("Initial message: ", msg);
    }
);

//task 3
document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button clicked!");
});
document.getElementById("clickMe2").addEventListener("click", function () {
    alert("Button clicked!");
});

//task 4
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break;
        }
    }
}

repeatTask(5, function (index) {
    console.log("Iteration:", index);

    if (index === 2) {
        return false;
    }
});
