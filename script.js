const numButton = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const operator = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clear-input');
const undoBtn = document.querySelector('.undoButton');
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
    oprToggle = '';
});

equal.addEventListener('click',() => {
    compute();
})

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
    } else if (key === 'Enter' || key === 'Return') {
      event.preventDefault();
     compute();
    } else if (key === 'Backspace') {
      if (currentNum.textContent) {
        currentNum.textContent = currentNum.textContent.slice(0, -1);
      }return;
    }
      else if (key === 'Escape') {
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