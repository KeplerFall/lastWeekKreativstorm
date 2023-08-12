const numButton = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const operator = document.querySelectorAll('.operator');
const currentNum = document.getElementById("results");
const clearAll = document.querySelector('.clear-input');
const sign = document.querySelector('.sign');
let prevNum = 0;

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
    calculate();
})

sign.addEventListener('click',() => {
    changeSign(currentNum.value);
})

const changeSign = (number) =>{
    if(prevNum === 0 && currentNum.value !== ''){
        currentNum.value = - number;
    }
}
const appendNumber = (number) =>{ //add more than single number
    if(number === '.' && currentNum.value.includes('.')) return
    currentNum.value = currentNum.value + number ;
}

const chooseOperation = (opr) => {
    if(currentNum.value === '') return
    if(prevNum !== ''){
        calculate();
    }
    prevNum = currentNum.value;
    currentNum.value = ''; 
    operator.value = opr; 
}

const calculate = () => { //when press eqaul or another operator
    let calc;
    const curr = parseFloat(currentNum.value);
    const prev = parseFloat(prevNum);
    if(isNaN(curr)|| isNaN(prev)) return
    switch (operator.value) {
        case '+':
            calc = prev + curr;
        break;
        case '-':
            calc = prev - curr;
        break;
        case '*':
            calc = prev * curr;
        break;
        case '/':
            calc = prev / curr;
        break;    
        case '%':
            calc = prev % curr;
        break; 
        default:
            return
    }
    currentNum.value = calc;
    prevNum = '';
}