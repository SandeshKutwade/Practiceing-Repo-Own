// script.js
const input = document.getElementById("myInput");
const ul = document.getElementById("myUL");

function addTask() {
    const taskText = input.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        ul.appendChild(li);
        input.value = "";
    }
}

// Example: Add some initial tasks
addTask(); // Replace with your actual tasks
addTask(); // Replace with your actual tasks
