let arr = []; //store clicked numbers 
let calc_arr = []; //use it store numbers for calculations
let first_num; // join() arr numbers 

let num = document.querySelectorAll('.number');
let equal = document.querySelector('.equal');
let modules = document.querySelector('.modules');
let divde = document.querySelector('.divde');
let multiply = document.querySelector('.multiply');
let sum = document.querySelector('.sum');
let subtract = document.querySelector('.subtract');
let results = document.getElementById("results");
let clearInput = document.querySelector('.clear-input');

num.forEach(n => { //get any clicked number
    n.addEventListener('click',function(event){
        let new_number = event.target.value;
        arr.push(new_number);
        first_num = Number(arr.join(''))
        showInput(first_num);
    })
});
 
//get any clicked operator
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
clearInput.addEventListener('click',function(){
    arr = [];
    calc_arr = [];
    first_num = 0 ;
    showInput(0);
})
// do calculations
const calculate = (operator) => {
    if(calc_arr.length == 0){
        calc_arr.push(first_num);
        clear();
    } else {
        calc_arr.push(first_num);  
        let intial = 0;      
        switch (operator) {
            case 'sum':
                intial =  calc_arr[0] + first_num;
                    break;
                case 'divde':
                    intial =  calc_arr[0] / first_num;
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

//show result input
const showInput = (number) =>{
return results.value = number;
}

// clear result input
const clear = () =>{
   arr = [];
   showInput(0);
}
