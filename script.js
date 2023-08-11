let mainInput = null
let operator = null
let clear = false;
let numbers = []

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

const mul = (a,b)=>{
    return a * b 
}

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


     if(arg) operator = null;

}

const buttonInput = (value)=>{
    if(/(ERROR)/g.test(mainInput.value)) mainInput.value = ""

    if(/[0-9]/g.test(value)){//Number input
        if(clear) {mainInput.value = ""; clear = false;}
        let arr = mainInput.value.split("")
        arr.push(value)
        mainInput.value = arr.join("")
    }
    if(/(\+|\-|\-|\/|\*|(submit))/g.test(value)){ // Operation
        if(mainInput.value == null || mainInput.value == "") return;
        numbers.push(parseFloat(mainInput.value))
        if(operator == value || value == "submit" || value == "="){operate("equal")}
        else{operator = value;clear = true;}

    }
    if(/\./g.test(value)){
        let arr = mainInput.value.split("")
        if(arr.includes(".")) return;
        if(arr.length == 0) {arr.push(0)}
        arr.push(".")
        mainInput.value = arr.join("")
    }

    if(value == "Ac"){
        mainInput.value = ""
        operator = null
        clear = false;
        numbers = []
    }
    
    if(value == "undo"){
        if(numbers.length == 0){mainInput.value = ""; return;}
        mainInput.value = numbers[numbers.length -1]
        numbers.pop()
    }
}

const manualInput = (event)=>{
    const data = event.data 
    if(data == null) return;
    let arr = mainInput.value.split("")
    arr.pop()
    mainInput.value = arr.join("")
    if(/\+|\-|\-|\/|\.|\*|[0-9]/g.test(data)) buttonInput(data)
}