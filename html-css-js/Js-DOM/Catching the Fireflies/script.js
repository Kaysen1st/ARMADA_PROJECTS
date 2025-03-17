    // Game variables
    const gameArea = document.getElementById('game-area');
    const fireflies = document.querySelectorAll('.firefly');
    
    // Position fireflies randomly
    positionFirefliesRandomly();
    
    // Add event listeners to all fireflies
    fireflies.forEach(firefly => {
        // Set initial random positions
        randomizePosition(firefly);
        
        // Add click event listener
        firefly.addEventListener('click', function() {
            // Play catch animation
            this.classList.add('scale-100', 'opacity-0');
                            
                // Reposition and show after delay
                setTimeout(() => {
                    randomizePosition(this);
                    this.classList.remove('scale-50', 'opacity-0', 'invisible');
                }, 400);

        });
    });
    
    // Function to position fireflies randomly
    function positionFirefliesRandomly() {
        fireflies.forEach(firefly => {
            randomizePosition(firefly);
        });
    }
    
    // Function to set random position for a firefly
    function randomizePosition(firefly) {
        const maxX = gameArea.clientWidth - 80;
        const maxY = gameArea.clientHeight - 80;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        firefly.style.left = `${randomX}px`;
        firefly.style.top = `${randomY}px`;
    };
