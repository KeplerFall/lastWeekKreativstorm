let arr = [];
let calc_arr = [];
let first_num;

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
        first_num = Number(arr.join(''))
        showInput(first_num);
    })
});

sum.addEventListener('click',function(){
    if(calc_arr.length == 0){
        calc_arr.push(first_num);
        clear();
    } else {
        calc_arr.push(first_num);
        let add_num = 0;
        calc_arr.forEach(num =>{
            add_num += num;
            showInput(add_num);
            console.log(calc_arr);
            console.log(add_num);
        })
    }
})

const showInput = (number) =>{
return results.value = number;
}

const clear = () =>{
   arr = [];
   return results.value = 0;
}
