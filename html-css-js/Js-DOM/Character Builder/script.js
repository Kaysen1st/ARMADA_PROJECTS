document.addEventListener('DOMContentLoaded', () => {
    // Get all armor option elements
    const armorOptions = document.querySelectorAll('.armor-option');
    
    // Add click event listeners to each armor option
    armorOptions.forEach(option => {
        option.addEventListener('click', selectArmorPiece);
    });
    
    // Function to handle armor piece selection
    function selectArmorPiece(e) {
        const option = e.currentTarget;
        const partType = option.getAttribute('data-part');
        const imgSrc = option.getAttribute('data-src');
        
        // Update visual selection indicator (remove previous selection)
        document.querySelectorAll(`.armor-option[data-part="${partType}"]`).forEach(el => {
            el.classList.remove('selected');
        });
        
        // Add selection indicator to clicked option
        option.classList.add('selected');
        
        // Update character preview
        const displayElement = document.getElementById(`${partType}-display`);
        displayElement.src = imgSrc;
        displayElement.style.display = 'inline-block';
    }
    
    // Save character button functionality
    const saveButton = document.getElementById('save-character');
    saveButton.addEventListener('click', () => {
        // Check if all armor pieces are selected
        const helmet = document.querySelector('.armor-option[data-part="helmet"].selected');
        const armor = document.querySelector('.armor-option[data-part="armor"].selected');
        const leggings = document.querySelector('.armor-option[data-part="leggings"].selected');
        const boots = document.querySelector('.armor-option[data-part="boots"].selected');
        
        if (helmet && armor && leggings && boots) {
            // Create save confirmation
            const confirmation = document.createElement('div');
            confirmation.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50';
            confirmation.innerHTML = `
                <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 class="text-xl font-bold mb-4">Character Saved!</h3>
                    <p class="mb-4">Your custom character has been saved successfully.</p>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            `;
            
            document.body.appendChild(confirmation);
            
            // Add event listener to close button
            confirmation.querySelector('button').addEventListener('click', () => {
                confirmation.remove();
            });
        } else {
            // Alert if not all pieces are selected
            alert('Please select all armor pieces before saving your character!');
        }
    });
    
    // Optional: Add a randomize function
    function randomizeCharacter() {
        const parts = ['helmet', 'armor', 'leggings', 'boots'];
        
        parts.forEach(part => {
            const options = document.querySelectorAll(`.armor-option[data-part="${part}"]`);
            const randomIndex = Math.floor(Math.random() * options.length);
            options[randomIndex].click();
        });
    }
    
    // Add randomize button
    const selectionPanel = document.querySelector('.selection-panels');
    const randomizeButton = document.createElement('div');
    randomizeButton.className = 'text-center mt-4';
    randomizeButton.innerHTML = `
        <button id="randomize" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition mr-2">
            Randomize
        </button>
    `;
    
    selectionPanel.appendChild(randomizeButton);
    document.getElementById('randomize').addEventListener('click', randomizeCharacter);
});