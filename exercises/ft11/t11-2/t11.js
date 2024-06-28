// Get the necessary DOM elements
const addBtn = document.querySelector('.add');
const remBtn = document.querySelector('.rem');
const inputField = document.querySelector('.con1 input');
const parasContainer = document.querySelector('.paras');

// Initialize the tasks array as an array of objects
const tasks = [
    { description: 'wash dishes', dateAdded: new Date() },
    { description: 'play games', dateAdded: new Date() },
    { description: 'read articles', dateAdded: new Date() }
];

// Function to render the to-do list
function renderToDoList() {
    parasContainer.innerHTML = ''; // Clear the current content

    // Iterate through the tasks array and create the task elements
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('p');
        taskElement.innerHTML = `
            ${task.description} - <small>${task.dateAdded.toLocaleString()}</small>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        // Append the task element to the container
        parasContainer.appendChild(taskElement);
    });
}

// Function to add a new task
function addTask() {
    const newTask = inputField.value.trim();
    if (newTask) {
        // Create a new task object with the description and date added
        const newTaskObject = {
            description: newTask,
            dateAdded: new Date() // Current date and time
        };

        // Add the new task object to the tasks array
        tasks.push(newTaskObject);

        // Clear the input field
        inputField.value = '';

        // Re-render the list
        renderToDoList();

        console.log(`Added "${newTask}" successfully`);
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    renderToDoList(); // Re-render the list
}

// Function to remove the last task
function removeLastTask() {
    if (tasks.length > 0) {
        tasks.pop(); // Remove the last task from the array
        renderToDoList(); // Re-render the list
    }
}

// Add event listeners
addBtn.addEventListener('click', addTask);
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
remBtn.addEventListener('click', removeLastTask);

// Initial rendering of the list
renderToDoList();
