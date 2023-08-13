<<<<<<< HEAD

let currentInput = "";
let expression = "";

function infixToPostfix(infix) {
    const output = [];
    const stack = [];
    
    const getPrecedence = (op) => {
        const precedence = {'+': 1, '-': 1, '*': 2, '/': 2};
        return precedence[op] || 0;
    };
=======
const numButton = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const operator = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clear-input');
const undoBtn = document.querySelector('.undo');
const currentNum = document.getElementById("results");
const prevNum = document.querySelector(".prevNum");
let oprToggle;

numButton.forEach(n => { //get any clicked number
    n.addEventListener('click',() => {
        appendNumber(n.value); 
    })
});

operator.forEach(op => { //get any clicked opertaor
    op.addEventListener('click',(event) => {
        chooseOperation(event.target.value);
    })
});

clearAll.addEventListener('click',() => {
    currentNum.textContent = '';
    prevNum.textContent = '';
});
>>>>>>> omarsBranch

    const isOperator = (token) => ['+', '-', '*', '/'].includes(token);

<<<<<<< HEAD
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
    } else if (value === "submit" || value === "Enter") {
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
    const key = event.key;
    if ((key >= "0" && key <= "9") || key === ".") {
        buttonInput(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        buttonInput(key);
    } else if (key === "Enter" || key === "=") {
        buttonInput("submit");
    } else if (key === "Backspace") {
        buttonInput("undo");
    }
});
=======
undoBtn.addEventListener('click',() => {
    if (currentNum.textContent) {
        currentNum.textContent = currentNum.textContent.slice(0, -1);
      }
})

const appendNumber = (number) =>{ //add more than single number
    if(number === '.' && currentNum.textContent.includes('.')) return
    currentNum.textContent = currentNum.textContent + number ;
}

const chooseOperation = (opr) => {
    oprToggle = opr;
    if (prevNum.textContent && currentNum.textContent && oprToggle) {
        compute();
        }
        if (currentNum.textContent) {
          prevNum.textContent = currentNum.textContent;
          currentNum.textContent = "";
          operator.value = opr;
        } else if (prevNum.textContent) {
            operator.value = opr;
        } 
}

const compute = () => { //when press eqaul or another operator
    let computation;
    const curr = parseFloat(currentNum.textContent);
    const prev = parseFloat(prevNum.textContent);
    if(isNaN(curr)|| isNaN(prev)) return
    switch (operator.value) {
        case '+':
            computation = prev + curr;
        break;
        case '-':
            computation = prev - curr;
        break;
        case '*':
            computation = prev * curr;
        break;
        case '/':
            if (curr == 0) {
                prevNum.textContent = '';
                currentNum.textContent = '';
                return currentNum.textContent = "Cannot divide by 0";
              } else {
                computation = prev / curr;
             }
        break;    
        case '%':
            computation = prev % curr; 
        break; 
        default:
            return;
    }
    currentNum.textContent = roundNumber(computation);
    prevNum.textContent = '';
}

// keyborad support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/^[0-9]$/.test(key)) {
      appendNumber(key);
    } else if (key === '+' || key === '-' ||  key === '*' ||  key === '/') {
      chooseOperation(key);
    } else if (key === '.' ||  key === ',') {
      appendNumber('.');
    } else if (key === 'Enter') {
     compute();
    } else if (key === 'Escape') {
       currentNum.textContent = '';
       prevNum.textContent = '';
    }
  });
  function roundNumber(number) {
    if (+number % 1 !== 0) {
      return parseFloat(number.toFixed(4));
    }
    return number;
}
>>>>>>> omarsBranch
