
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask input').value.length == 0) {
        alert("Please Enter a Task !!")
    }
    else {
        // Adding the Tasks
        document.querySelector('#tasks').innerHTML +=
        `
        <div class = "task">
            <span id = "taskName">
                ${document.querySelector('#newTask input').value}
            </span>
            <button class = "delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        `;
        // Deleting the tasks
        var current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        // Task completed script
        var tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }
        // Clearing the input space after adding the tasks
        document.querySelector('#newTask input').value = "";
    }
}