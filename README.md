# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug caused by the language's loose typing and the behavior of the plus (+) operator.  When adding a number and a string, JavaScript will perform string concatenation instead of numerical addition, leading to unexpected results. 

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution using explicit type checking or other methods.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and examine the code. Note the unexpected output when adding a number and a string.
3. Open `bugSolution.js` to see different ways to resolve the issue.

## Solutions

The best solution often depends on the context of your program, but common strategies include:

* **Explicit type checking:** Use `typeof` to check if the operands are numbers before performing the addition.
* **Type conversion:** Use `parseInt()` or `parseFloat()` to explicitly convert strings to numbers.
* **Using Template Literals for String Concatenation:** If string concatenation is the intended behavior, use template literals for clarity.