
## Task 1: Generate Pattern

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `generatePattern()` | Function call |
| Loop (`i = 1`) | `result = "1 \n"` |
| Loop (`i = 2`) | `result = "1 \n1 2 \n"` |
| Loop (`i = 3`) | `result = "1 \n1 2 \n1 2 3 \n"` |
| `return result` | "1 \n1 2 \n1 2 3 \n" |

Output:
```
1 
1 2 
1 2 3 
```

---

## Task 2: Swap First and Last Elements

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `numbers` | `[10, 20, 30, 40]` |
| `swapFirstLast(numbers)` | Function call |
| `first = 10` | `last = 40` |
| `arr` after swap | `[40, 20, 30, 10]` |
| `return arr` | `[40, 20, 30, 10]` |

Output:
```
[40, 20, 30, 10]
[40, 20, 30, 10]
```

---

## Task 3: Filter Passing Grades

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `scores` | `[85, 45, 90, 60]` |
| `filterPassingGrades(scores)` | Function call |
| Iteration 1 (`grade = 85`) | `passing = [85]` |
| Iteration 2 (`grade = 45`) | `passing = [45, 85]` |
| Iteration 3 (`grade = 90`) | `passing = [45, 85, 90]` |
| Iteration 4 (`grade = 60`) | `passing = [45, 60, 85, 90]` |
| `return passing` | `[45, 60, 85, 90]` |

Output:
```
[45, 60, 85, 90]
```

---

## Task 4: Update Task Status

| **Variable/Expression** | **Value** |
|------------------------|----------|
| `taskList` | `[{id: 1, completed: false}, {id: 2, completed: true}]` |
| `updateStatus(taskList)` | Function call |
| Iteration 1 (`task.id = 1`) | `completed = true` |
| Iteration 2 (`task.id = 2`) | `completed = false` |
| `return tasks` | `[{id: 1, completed: true}, {id: 2, completed: false}]` |

Output:
```
[{id: 1, completed: true}, {id: 2, completed: false}]
[{id: 1, completed: true}, {id: 2, completed: false}]
```

---

## Task 5: Find Value in Array

| **Function Call** | **Return Value** |
|------------------|----------------|
| `findValue(data, 12)` | `"Found at index 1"` |
| `findValue(data, 100)` | `"Not found"` |

Output:
```
Found at index 1
Not found
