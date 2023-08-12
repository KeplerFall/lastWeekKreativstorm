const numButton = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const operator = document.querySelectorAll('.operator');
const currentNum = document.getElementById("results");
const clearAll = document.querySelector('.clear-input');
const sign = document.querySelector('.sign');
let prevNum = 0;

window.addEventListener("load",()=>{
    mainInput = document.querySelector("#results")
    additionalValues = document.querySelector("#additionalValues")
    mainInput.addEventListener("input", event => manualInput(event))
    document.querySelector("form").addEventListener("submit", event=> submitEvent(event))
})

const sum = (a,b)=>{
    return a + b 
}

const min = (a,b)=>{
    return a - b 
}

equal.addEventListener('click',() => {
    calculate();
})

const div = (a,b)=>{
    if(b == 0){numbers.pop();return "ERROR";}
    else return a / b
}



const submitEvent = (event)=>{
    event.preventDefault()
    buttonInput("submit")
}

const operate = (arg)=>{
    if(numbers.length <= 1 || !operator) return;
     if(!operator || numbers.length == 0 || mainInput.value == null) return;
     switch(operator){
        case "+":
            mainInput.value = sum(numbers[numbers.length -1], numbers[numbers.length -2])
            break;
        case "-":
            mainInput.value = min(numbers[numbers.length -2], numbers[numbers.length -1] )
            break;
        case "*":
            mainInput.value = mul(numbers[numbers.length -2],numbers[numbers.length -1])
            break;
        case "/":
            mainInput.value = div(numbers[numbers.length -2],numbers[numbers.length -1])
            break;
     }
     mayDelete = true;
     if(arg) operator = null;

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