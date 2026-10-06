function addTask() {
    const titleInput = document.getElementById('taskInput');
    const descInput = document.getElementById('taskDesc');
    
    const title = titleInput.value;
    const description = descInput.value;

    if (title === '') {
        alert("Te rugăm să introduci un titlu!");
        return;
    }

    const li = document.createElement('li');
    
    // Construim structura cu titlu și descriere
    li.innerHTML = `
        <div class="task-content">
            <span class="task-title" onclick="toggleTask(this)">${title}</span>
            ${description ? `<span class="task-description">${description}</span>` : ''}
        </div>
        <button onclick="deleteTask(this)" style="background: #ff4d4d; border: none; color: white; border-radius: 5px; cursor: pointer; padding: 5px 10px;">Șterge</button>
    `;

    document.getElementById('taskList').appendChild(li);

    // Resetăm câmpurile după adăugare
    titleInput.value = '';
    descInput.value = '';
}

function toggleTask(element) {
    // element este span-ul cu titlul, vrem să tăiem tot grupul de text
    element.parentElement.classList.toggle('completed');
}

function deleteTask(element) {
    element.parentElement.remove();
}