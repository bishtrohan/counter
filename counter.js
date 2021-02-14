let showCount=0;
document.getElementById('count').innerText=showCount;
let counter=document.getElementById('count');
// document.querySelector('#count').innerText ;


//function to increment counter
function increase()
{
   showCount++;
   counter.innerText=showCount;
}

let addBtn=document.getElementById('add');
addBtn.addEventListener('click',increase);


//function to decrement counter
function decrease()
{
   showCount--;
   counter.innerText=showCount;
}

let minusBtn=document.getElementById('reduce');
minusBtn.addEventListener('click',decrease);

//function to reset counter
function reset()
{
   showCount=0;
   counter.innerText=showCount;
}

let resetBtn=document.getElementById('reset');
resetBtn.addEventListener('click',reset);