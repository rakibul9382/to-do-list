// document.addEventListener("DOMContentLoaded", function(){
//     const input = document.getElementById("task-input");
//     const button = document.getElementById("add-button");
//     const taskList = document.getElementById("task-list");


//     //load task from local storage if available or use empty array
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


//     //save task array to local Storage
//     function saveTaskToStorage(){
//       localStorage.setItem("tasks",JSON.stringify(tasks));
//     }

//     //function to render all task to display
//     function renderTasks(){
//       //clear current task list
//       taskList.innerHTML = "";
//       //loop through each task and create ui element
//       tasks.array.forEach((taskObj,index) => {
//         const li = document.createElement("li");

//         //create checkbox
//         const checkBox = document.createElement("input");
//         checkBox.type = "checkbox";
//         checkbox.style.marginRight = "10px";
//         checkbox.checked = taskObj.done;

//         // Apply strike-through if task is marked as done
//         if (taskObj.done) {
//           li.style.textDecoration = "line-through";
//         }
//         checkbox.addEventListener("change", function () {
//                 taskObj.done = checkbox.checked;
//                 li.style.textDecoration = checkbox.checked ? "line-through" : "none";
//                 saveTasksToStorage();
//         });

//          //create delete button
//             const deleteBtn = document.createElement("button");
//             deleteBtn.textContent = "🗑️";
//             deleteBtn.style.marginLeft = "10px";
//             deleteBtn.style.cursor = "pointer";
//             deleteBtn.style.background = "transparent";
//             deleteBtn.style.border = "none";
//             deleteBtn.style.color = "red";
//             deleteBtn.style.fontSize = "16px";
//           // When delete is clicked, remove task from array and re-render
//             deleteBtn.addEventListener("click", function () {
//                 tasks.splice(index, 1); // remove task at this index
//                 saveTasksToStorage();   // update localStorage
//                 renderTasks();          // re-render the task list
//             });
//            // Build the <li> and add it to the list
//             li.appendChild(checkbox);
//             li.appendChild(document.createTextNode(taskObj.text));
//             li.appendChild(deleteBtn);
//             taskList.appendChild(li);
//       });
//     }

//     // Add task on button click
//     button.addEventListener("click", function () {
//         const taskText = input.value.trim();
//         if (taskText !== "") {
//             // Add new task object to array
//             tasks.push({ text: taskText, done: false });
//             saveTasksToStorage(); // Save to localStorage
//             renderTasks();        // Show updated list
//             input.value = "";     // Clear input field
//         }
//     });

//       input.addEventListener("keypress", function (e) {
//       if (e.key === "Enter") {
//         button.click();  
//       }
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    // Get references to DOM elements
    const input = document.getElementById("task-input");
    const button = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage if available, or use empty array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Save tasks array to localStorage
    function saveTasksToStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to render all tasks to the screen
    function renderTasks() {
        // Clear the current task list
        taskList.innerHTML = "";

        // Loop through each task and create UI elements
        tasks.forEach((taskObj, index) => 
          {
            const li = document.createElement("li");

            // Create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.marginRight = "10px";
            checkbox.checked = taskObj.done;

            // Apply strike-through if task is marked as done
            if (taskObj.done) {
                li.style.textDecoration = "line-through";
            }

            // Toggle strike-through and update storage when checkbox is changed
            checkbox.addEventListener("change", function () {
                taskObj.done = checkbox.checked;
                li.style.textDecoration = checkbox.checked ? "line-through" : "none";
                saveTasksToStorage();
            });

            // Create delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑️";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.background = "transparent";
            deleteBtn.style.border = "none";
            deleteBtn.style.color = "red";
            deleteBtn.style.fontSize = "16px";

            // When delete is clicked, remove task from array and re-render
            deleteBtn.addEventListener("click", function () {
                tasks.splice(index, 1); // remove task at this index
                saveTasksToStorage();   // update localStorage
                renderTasks();          // re-render the task list
            });

            // Build the <li> and add it to the list
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(taskObj.text));
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    // Add task on button click
    button.addEventListener("click", function () {
        const taskText = input.value.trim();
        if (taskText !== "") {
            // Add new task object to array
            tasks.push({ text: taskText, done: false });
            saveTasksToStorage(); // Save to localStorage
            renderTasks();        // Show updated list
            input.value = "";     // Clear input field
        }
    });

    // Add task when user presses Enter key
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            button.click(); // trigger add button
        }
    });

    // Initial render on page load
    renderTasks();
});

