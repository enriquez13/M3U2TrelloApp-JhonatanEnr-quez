const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    const formData = ev.target;

    const data = {
        title : formData.titleTask.value,
        person: formData.responsibleTask.value,
        //details: formData.detailsTask.value,
        //deadline: formData.deadLineTask.value,
        deadline: Number(moment().add(formData.deadLineTask.value, 'days').format('X')),
        created: Number(moment().format("X")),
        state: 'to-do'
    };
console.log(formData.deadLineTask.value)
    axios.post(`${API_URL}/tasks`, data)
        .then((res) => {
            createTask(res.data);
            formData.reset();
        })
        .catch((err) => console.error(err));
});