# T-Diagram for JavaScript Code Execution

## Task 1: Calculate Sum Function

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `numbers` | `[1, 2, 3, 4]` |
| `calculateSum(numbers)` | Function call |
| `arr` | `[1, 2, 3, 4]` |
| `sum` | `0` (initial) |
| Loop (`i = 0`) | `sum = 0 + 1 = 1` |
| Loop (`i = 1`) | `sum = 1 + 2 = 3` |
| Loop (`i = 2`) | `sum = 3 + 3 = 6` |
| Loop (`i = 3`) | `sum = 6 + 4 = 10` |
| `return sum` | `10` |
| `console.log("Sum:", calculateSum(numbers))` | `Sum: 10` |

---

## Task 2: Check Even Numbers

| **Function Call** | **Return Value** |
|------------------|----------------|
| `isEven(4)` | `true` |
| `isEven(7)` | `false` |
| `isEven(0)` | `true` |

---

## Task 3: Personalized Greeting

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `friends` | `['Alice', 'Bob', 'Charlie']` |
| `personalizedGreeting(friends)` | Function call |
| Loop (`i = 0`) | `greet('Alice') → "Hello, Alice!"` |
| Loop (`i = 1`) | `greet('Bob') → "Hello, Bob!"` |
| Loop (`i = 2`) | `greet('Charlie') → "Hello, Charlie!"` |

Output:
```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

---

## Task 4: Reverse an Array

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `originalArray` | `[10, 20, 30]` |
| `reverseArray(originalArray)` | Function call |
| Loop (`i = 2`) | `reversed = [30]` |
| Loop (`i = 1`) | `reversed = [30, 20]` |
| Loop (`i = 0`) | `reversed = [30, 20, 10]` |
| `return reversed` | `[30, 20, 10]` |
| `console.log(reverseArray(originalArray))` | `[30, 20, 10]` |
| `console.log(originalArray)` | `[10, 20, 30]` |

---

## Task 5: Multiply Matrix Elements by 2

| **Matrix Before** | **Matrix After `multiplyMatrix(matrix)`** |
|------------------|---------------------------------|
| `[[1, 2], [3, 4]]` | `[[2, 4], [6, 8]]` |

Output:
```
[[2, 4], [6, 8]]
```
