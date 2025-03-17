document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const notifications = document.getElementById('notifications');

    // Add task when button is clicked
    addTaskBtn.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Prevent empty tasks
        if (taskText === '') {
            showNotification('Cannot add empty task', 'error');
            return;
        }
        
        // Create new task element
        const li = document.createElement('li');
        li.className = 'border-b border-gray-200 last:border-0 group';
        
        // Task container with flex layout
        const taskContainer = document.createElement('div');
        taskContainer.className = 'flex items-center p-4';
        
        // Task content
        const taskContent = document.createElement('span');
        taskContent.className = 'flex-grow cursor-pointer';
        taskContent.textContent = taskText;
        
        // Complete toggle functionality
        taskContent.addEventListener('click', () => {
            taskContent.classList.toggle('line-through');
            taskContent.classList.toggle('text-gray-400');
            
            if (taskContent.classList.contains('line-through')) {
                showNotification(`Task completed: ${taskText}`);
            } else {
                showNotification(`Task active: ${taskText}`);
            }
        });
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'text-gray-400 hover:text-red-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200';
        deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
        
        deleteBtn.addEventListener('click', () => {
            li.remove();
            showNotification(`Task removed: ${taskText}`);
        });
        
        // Assemble the task
        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(deleteBtn);
        li.appendChild(taskContainer);
        
        // Add to list
        taskList.appendChild(li);
        
        // Clear input
        taskInput.value = '';
        
        // Show notification
        showNotification(`Task added: ${taskText}`);
        
        // Focus back on input
        taskInput.focus();
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        
        // Different styles based on notification type
        if (type === 'error') {
            notification.className = 'bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-3 rounded shadow-md';
        } else {
            notification.className = 'bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-3 rounded shadow-md';
        }
        
        // Notification content
        const content = document.createElement('div');
        content.className = 'flex justify-between items-center';
        
        const text = document.createElement('span');
        text.textContent = message;
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'text-gray-500 hover:text-gray-800';
        closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
        
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        content.appendChild(text);
        content.appendChild(closeBtn);
        notification.appendChild(content);
        
        // Add to notifications area
        notifications.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
});