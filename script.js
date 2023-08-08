let arr = [];
let calc_arr = [];
let first_num;

let num = document.querySelectorAll('.number');
let equal = document.querySelector('.equal');
let modules = document.querySelector('.modules');
let divde = document.querySelector('.divde');
let multiply = document.querySelector('.multiply');
let sum = document.querySelector('.sum');
let subtract = document.querySelector('.subtract');
let results = document.getElementById("results");

num.forEach(n => {
    n.addEventListener('click',function(event){
        let new_number = event.target.value;
        arr.push(new_number);
        first_num = Number(arr.join(''))
        showInput(first_num);
    })
});

sum.addEventListener('click',function(){
    clear();
    calculate('sum');
})
divde.addEventListener('click',function(){
    clear();
    calculate('divde');
})
multiply.addEventListener('click',function(){
    clear();
    calculate('multiply');
})
subtract.addEventListener('click',function(){
    clear();
    calculate('subtract');
})


const calculate = (operator) => {
    if(calc_arr.length == 0){
        calc_arr.push(first_num);
        clear();
    } else {
        calc_arr.push(first_num);  
        let intial = 0;      
        switch (operator) {
            case 'sum':
                intial =  calc_arr[0]+first_num;
                    break;
                case 'divde':
                    intial =  calc_arr[0]/first_num;
                    break;
                case 'multiply':
                    intial =  calc_arr[0]*first_num;
                    break;
                case 'subtract':
                    intial =  calc_arr[0]-first_num;
                    break;
                default:
                    break;
            }
        showInput(intial);
    }
}
const showInput = (number) =>{
return results.value = number;
}

const clear = () =>{
   arr = [];
   showInput(0);
}
