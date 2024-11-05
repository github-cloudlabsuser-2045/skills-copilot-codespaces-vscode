const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

rl.question('Enter first number: ', (firstNumber) => {
    rl.question('Enter second number: ', (secondNumber) => {
        rl.question('Enter operator (+, -, *, /): ', (operator) => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            const result = calculate(num1, num2, operator);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});