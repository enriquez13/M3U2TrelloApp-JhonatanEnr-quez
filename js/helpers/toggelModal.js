const modalnewTask = document.querySelector('#modalNewTask')
const btnNewTask = document.querySelector('#btnNewTask')
const btnCancelNewTask = document.querySelector('#btnCancelNewTask')

btnNewTask.addEventListener('click', ()=>{
    modalnewTask.classList.add('active');
})

btnCancelNewTask.addEventListener('click', ()=>{
    modalnewTask.classList.remove('active');
})