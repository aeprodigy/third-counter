let add = document.getElementById('add');
let sub = document.getElementById('subtract');
let value = document.getElementById('number');

let adder =0;
add.addEventListener('click',function(){
    adder+=1;
    value.innerHTML = adder;
    if(value>0){
        value.style.color='green';
    }
    console.log(value);
})


function dissable(value){
    if(value === 0){
        sub.disabled = true
    }
    else{
        sub.disabled= false;
    }
}


sub.addEventListener('click',function(){
    adder-=1;
    value.innerHTML = adder;
    console.log(value);

   
})

