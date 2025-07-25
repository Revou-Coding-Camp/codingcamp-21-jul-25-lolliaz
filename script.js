// 
let tasks = [];

function addTask() {
    
    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    
    if (taskInput.value === "" || dateInput.value === "") {
       
        alert("Please enter a task and a date.");
    } else {
        
        tasks.push({
            title: taskInput.value,
            date: dateInput.value,
            completed: false,
        });

        renderTasks();
    }

}



function filterTask() {
    const filterDate = document.getElementById('date-input').value;
    const todoList = document.getElementById('todo-list');
    
    let filtered;
    if (!filterDate) {
        filtered = tasks; // tampilkan semua jika tanggal kosong
    } else {
        filtered = tasks.filter(task => task.date === filterDate);
    }

    if (filtered.length === 0) {
        todoList.innerHTML = '<p>No tasks available</p>';
    } else {
        todoList.innerHTML = filtered.map(task => `<p>${task.title} - ${task.date}</p>`).join('');
    }
}

function removeAllTask() {
    
    tasks = [];

    renderTasks();
}

function toggleFilter() {
   
}

function completeTask(index) {
    // Function to mark a task as completed
    tasks[index].completed = true;
}

function renderTasks() {
    // Function to render tasks on the page
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = ""; // Clear the current list

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
        <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
                    <span>${task.title}</span>
                    <div>
                        <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index});">Complete</button>
                        <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md">Delete</button>
                    </div>
                </li>
        `;
    });
}