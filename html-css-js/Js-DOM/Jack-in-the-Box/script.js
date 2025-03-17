
const closedBox = document.getElementById('closedBox');
const openBox = document.getElementById('openBox');
const surpriseImage = document.getElementById('surpriseImage');
const toggleButton = document.getElementById('toggleButton');
const popSound = document.getElementById('popSound');

// Track the current state
let isOpen = false;

// Function to open the box
function openTheBox() {
    // First transition - fade out closed box, fade in open box
    closedBox.classList.add('opacity-0');
    openBox.classList.remove('opacity-0');
    
    // Play sound
    if (popSound) {
        popSound.currentTime = 0;
        popSound.play().catch(e => console.log('Audio playback failed:', e));
    }
    
    // After a short delay, show the surprise with animation
    setTimeout(() => {
        surpriseImage.classList.remove('opacity-0');
        surpriseImage.classList.add('pop-up-animation');
    }, 500);
    
    // Update button
    toggleButton.textContent = 'Close';
    isOpen = true;
}

// Function to close the box
function closeTheBox() {
    // Reset all elements
    surpriseImage.classList.add('opacity-0');
    surpriseImage.classList.remove('pop-up-animation');
    
    // After surprise is hidden, change box state
    setTimeout(() => {
        openBox.classList.add('opacity-0');
        closedBox.classList.remove('opacity-0');
    }, 300);
    
    // Update button
    toggleButton.textContent = 'Click Me';
    isOpen = false;
}

// Toggle function
function toggleBox() {
    if (!isOpen) {
        openTheBox();
    } else {
        closeTheBox();
    }
}

// Add event listener
toggleButton.addEventListener('click', toggleBox);
