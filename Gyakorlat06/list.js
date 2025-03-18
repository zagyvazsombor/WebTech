document.addEventListener('DOMContentLoaded', function () {
    let submitBtn = document.getElementById('submit-btn');
    let taskList = document.getElementById('task-list');

    submitBtn.addEventListener('click', function () {
        let input = document.getElementById('to-do-input');
        let task = input.value;

        if (task !== '') {
            let newTask = document.createElement('li');
            newTask.textContent = task;

            newTask.addEventListener('click', function () {
                newTask.classList.toggle('completed');
            });

            taskList.appendChild(newTask);
            input.value = '';
        }
    });
});