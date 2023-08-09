let numButton = document.querySelectorAll('.number');
let equal = document.querySelector('.equal');
let operator = document.querySelectorAll('.operator');
let currentNum = document.getElementById("results");
let clearAll = document.querySelector('.clear-input');
let prevNum = 0 ;

numButton.forEach(n => { //get any clicked number
    n.addEventListener('click',(event) => {
        appendNumber(event.target.value);
    })
});

operator.forEach(op => { //get any clicked opertaor
    op.addEventListener('click',(event) => {
        chooseOperation(event.target.value);
    })
});

clearAll.addEventListener('click',() => {
    currentNum.value = '';
    prevNum = '';
});

equal.addEventListener('click',() => {
    compute();
})

const appendNumber = (number) =>{ //add more than single number
    if(number === '.' && currentNum.value.includes('.')) return
    currentNum.value = currentNum.value + number ;
}

const chooseOperation = (opr) => {
    if(currentNum.value === '') return
    if(prevNum !== ''){
        compute();
    }
    prevNum = currentNum.value;
    console.log(prevNum);
    currentNum.value = ''; 
    operator.value = opr; 
}

const compute = () => { //when press eqaul or another operator
    let computation;
    const curr = parseFloat(currentNum.value);
    const prev = parseFloat(prevNum);
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
            computation = prev / curr;
        break;    
        case '%':
            computation = prev % curr;
        break; 
        default:
            return;
    }
    currentNum.value = computation;
    prevNum = '';
}