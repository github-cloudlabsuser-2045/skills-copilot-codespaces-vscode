class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();

let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (add, subtract, multiply, divide):");

switch (operation) {
    case "add":
        alert(`Result: ${calculator.add(a, b)}`);
        break;
    case "subtract":
        alert(`Result: ${calculator.subtract(a, b)}`);
        break;
    case "multiply":
        alert(`Result: ${calculator.multiply(a, b)}`);
        break;
    case "divide":
        alert(`Result: ${calculator.divide(a, b)}`);
        break;
    default:
        alert("Invalid operation");
}