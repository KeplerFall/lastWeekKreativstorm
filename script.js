let arr = [];

let num = document.querySelectorAll('.number');
let equal = document.querySelector('.equal');
let modules = document.querySelector('.modules');
let divde = document.querySelector('.divde');
let multiply = document.querySelector('.multiply');
let sum = document.querySelector('.sum');
let results = document.getElementById("results");

num.forEach(n => {
    n.addEventListener('click',function(event){
        let new_number = event.target.value;
        arr.push(new_number);
        showInput(Number(arr.join('')));
    })
});

const addNumber = () =>{
    sum.addEventListener('click',function(){
        
    })
}
const showInput = (arr) =>{
return results.value = arr;
}