document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    var showNotificationBtn = document.getElementById('showNotification');
    var notificationContainer = document.getElementById('notificationContainer');
    
    // Counter for unique notification IDs
    var notificationCounter = 0;
    
    // Using onclick instead of addEventListener
    showNotificationBtn.onclick = createNotification;
    
    /**
     * Creates a new notification and adds it to the notification container
     * Using only: createElement, appendChild, insertBefore
     */
    function createNotification() {
        // Increment counter for unique ID
        notificationCounter++;
        
        // 1. CREATE ELEMENTS
        // Create notification element using createElement()
        var notification = document.createElement('div');
        notification.id = 'notification-' + notificationCounter;
        notification.className = 'alert alert-primary d-flex align-items-center justify-content-between mb-3 shadow-sm animate-slide-in';
        notification.setAttribute('role', 'alert');
        
        // Create content container
        var contentDiv = document.createElement('div');
        
        // Create message text
        var messageText = document.createElement('strong');
        messageText.textContent = "You have a new message!";
        
        // Create close button
        var closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'btn-close';
        closeBtn.setAttribute('aria-label', 'Close');
        
        // 2. SET UP EVENT HANDLING
        // Using onclick property instead of addEventListener
        closeBtn.onclick = function() {
            removeNotification(notification);
        };
        
        // 3. APPEND ELEMENTS
        // Append message to content div using appendChild()
        contentDiv.appendChild(messageText);
        
        // Append content and close button to notification using appendChild()
        notification.appendChild(contentDiv);
        notification.appendChild(closeBtn);
        
        // 4. INSERT INTO DOCUMENT
        // Insert the notification at the top of the container using insertBefore()
        if (notificationContainer.firstChild) {
            notificationContainer.insertBefore(notification, notificationContainer.firstChild);
        } else {
            notificationContainer.appendChild(notification);
        }
        
        // 5. SET AUTO-DISMISS
        // Set auto-dismiss timer (5 seconds)
        var timerId = setTimeout(function() {
            removeNotification(notification);
        }, 5000);
        
        // Store timer ID on the notification element for cleanup
        notification.setAttribute('data-timer-id', timerId);
    }
    
    /**
     * Removes a specific notification
     * Using only: removeChild
     * @param {HTMLElement} notification - The notification element to remove
     */
    function removeNotification(notification) {
        // Clear the auto-dismiss timer
        var timerId = notification.getAttribute('data-timer-id');
        if (timerId) {
            clearTimeout(parseInt(timerId));
        }
        
        // Add the fade-out animation class
        notification.classList.remove('animate-slide-in');
        notification.classList.add('animate-fade-out');
        
        // Remove the element after animation completes using removeChild()
        setTimeout(function() {
            // Only remove if the notification is still a child of the container
            if (notification.parentNode === notificationContainer) {
                notificationContainer.removeChild(notification);
            }
        }, 300);
    }
});