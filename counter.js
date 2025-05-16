const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const label = document.getElementById('label');

let count = 0;
increase.addEventListener('click', () => {
    count += 5;
    label.innerHTML = count;
})

reset.addEventListener('click', ()=>{
    count = 0;
    label.innerHTML = count;
});

decrease.addEventListener('click', ()=>{
    count -= 1;
    label.innerHTML = count;
});
