document.addEventListener("DOMContentLoaded", function(){
    const input = document.getElementById("task-input");
    const button = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");
    button.addEventListener("click",function(e){
        const task = input.value.trim();
        if (task !=="") {
            const li = document.createElement("li");
            //create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.marginLeft= "10px";

            //strike through when checked
            checkbox.addEventListener("change",function(){
              li.style.textDecoration = checkbox.checked? "line-through" : "none";
            });

            //create delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑️";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.background = "transparent";
            deleteBtn.style.border = "none";
            deleteBtn.style.color = "red";
            deleteBtn.style.fontSize = "16px";

            deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li);
            });

            // Build the task item
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(task));
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            input.value = "";

        }

      });
      input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        button.click();  
      }
    });
});


