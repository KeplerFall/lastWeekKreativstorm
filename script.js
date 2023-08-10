let mainInput = null
let sobInput = null
let operator = null
let numbers = []

window.addEventListener("load",()=>{
    mainInput = document.querySelector("#results")
    additionalValues = document.querySelector("#additionalValues")
    mainInput.addEventListener("input", event => manualInput(event))
    document.querySelector("form").addEventListener("submit", event=> submitEvent(event))
    sobInput = document.querySelector("#additionalValues")
})

const submitEvent = (event)=>{
    event.preventDefault()
    buttonInput("submit")
}

const operate = (arg)=>{
    console.log("Operate function inside")
    console.log("Em ordem o qq ta acontecendo", {operator: operator, numberLength: numbers.length, mainInputValue: mainInput.value})
    if(numbers.length <= 1 || !operator) return;
     if(!operator || numbers.length == 0 || mainInput.value == null) return;
     console.log("Inside operate, passou do return")
     switch(operator){
        case "+":
            mainInput.value = numbers[numbers.length -1] + numbers[numbers.length -2]
            break;
        case "-":
            mainInput.value = numbers[numbers.length -2] - numbers[numbers.length -1]
            break;
        case "*":
            mainInput.value = numbers[numbers.length -2] - numbers[numbers.length -1]
            break;
        case "/":
            if(numbers[numbers.length -1] == 0){mainInput.value = "ERROR"; numbers.pop()}
            else mainInput.value = numbers[numbers.length -2] / numbers[numbers.length -1]
            break;
     }


     if(arg) operator = null;

}

const buttonInput = (value)=>{
    if(mainInput.value == "ERROR") mainInput.value = ""

    if(/[0-9]/g.test(value)){//Number input
        let arr = mainInput.value.split("")
        arr.push(value)
        mainInput.value = arr.join("")
    }
    if(/(\+|\-|\-|\/|\*|(submit))/g.test(value)){ // Operation
        console.log("buttonInput", {value: value, operate})
        if(mainInput.value == null || mainInput.value == "") return;
        numbers.push(parseFloat(mainInput.value))
        if(operator == value || value == "submit" || value == "="){console.log("igual caralho");operate("equal")}
        else{operator = value;mainInput.value = ""}

    }
    if(/\./g.test(value)){
        let arr = mainInput.value.split("")
        if(arr.includes(".")) return;
        if(arr.length == 0) {arr.push(0)}
        arr.push(".")
        mainInput.value = arr.join("")
    }
    if(value == "Ac"){

    }
}

const manualInput = (event)=>{
    const data = event.data 
    if(data == null) return;
    let arr = mainInput.value.split("")
    arr.pop()
    mainInput.value = arr.join("")
    if(/\+|\-|\-|\/|\.|[0-9]/g.test(data)) buttonInput(data)
}