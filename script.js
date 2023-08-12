
let currentInput = "";
let expression = "";

function infixToPostfix(infix) {
    const output = [];
    const stack = [];
    
    const getPrecedence = (op) => {
        const precedence = {'+': 1, '-': 1, '*': 2, '/': 2};
        return precedence[op] || 0;
    };

    const isOperator = (token) => ['+', '-', '*', '/'].includes(token);

    for (let token of infix.split(" ")) {
        if (!isNaN(token) || token.includes(".")) {
            output.push(token);
        } else if (isOperator(token)) {
            while (stack.length && getPrecedence(token) <= getPrecedence(stack[stack.length - 1])) {
                output.push(stack.pop());
            }
            stack.push(token);
        } else if (token === "(") {
            stack.push(token);
        } else if (token === ")") {
            while (stack.length && stack[stack.length - 1] !== "(") {
                output.push(stack.pop());
            }
            stack.pop();
        }
    }

    while (stack.length) {
        output.push(stack.pop());
    }

    return output.join(" ");
}

function evaluatePostfix(postfix) {
    const stack = [];
    
    for (let token of postfix.split(" ")) {
        if (!isNaN(token) || token.includes(".")) {
            stack.push(parseFloat(token));
        } else {
            const right = stack.pop();
            const left = stack.pop();
            switch (token) {
                case "+":
                    stack.push(left + right);
                    break;
                case "-":
                    stack.push(left - right);
                    break;
                case "*":
                    stack.push(left * right);
                    break;
                case "/":
                    if (right === 0) return "ERROR";
                    stack.push(left / right);
                    break;
            }
        }
    }

    return stack[0].toString();
}

function buttonInput(value) {
    const display = document.getElementById("results");
    const additionalDisplay = document.getElementById("additionalValues");
    
    if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput || expression) {
            expression += currentInput + " " + value + " ";
            currentInput = "";
        }
    } else if (value === "Ac") {
        currentInput = "";
        expression = "";
    } else if (value === "undo" || value === "Backspace") {
        currentInput = currentInput.slice(0, -1);
    } else if (value === "=" || value === "Enter") {
        expression += currentInput;
        const postfix = infixToPostfix(expression);
        currentInput = evaluatePostfix(postfix);
        expression = "";
    } else if (value === "." && currentInput.includes(".")) {
        return;
    } else {
        currentInput += value;
    }
    
    display.value = currentInput;
    additionalDisplay.textContent = expression;
}

document.getElementById("results").addEventListener("input", function(event) {
    currentInput = event.target.value;
});

document.addEventListener("keydown", function(event) {
    event.preventDefault();  // Prevent default behavior for all keyboard events
    const key = event.key;
    if ((key >= "0" && key <= "9") || key === ".") {
        buttonInput(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        buttonInput(key);
    } else if (key === "Enter") {
        buttonInput("=");
    } else if (key === "Backspace") {
        buttonInput("undo");
    }
});
