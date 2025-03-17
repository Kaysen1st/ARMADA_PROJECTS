document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(img => {
        if (img.src.includes('wikia.nocookie.net')) {
            img.src = img.src.split('/revision')[0];
        }
    });

    document.querySelectorAll('.character-option').forEach(option => {
        if (option.dataset.characterImage.includes('wikia.nocookie.net')) {
            option.dataset.characterImage = option.dataset.characterImage.split('/revision')[0];
        }
    });

    // Get all character options
    const characterOptions = document.querySelectorAll('.character-option');

    // Set default selected character
    let selectedCharacterId = "1";

    // Add click event listeners to each character option
    characterOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Remove highlight from previously selected character
            document.querySelector(`.character-option[data-character-id="${selectedCharacterId}"]`)
                .classList.remove('bg-red-700', 'border-2', 'border-yellow-400');

            // Update selected character
            selectedCharacterId = this.dataset.characterId;
            updateSelectedCharacter(this);

            // Highlight the newly selected character
            this.classList.add('bg-red-700', 'border-2', 'border-yellow-400');
        });
    });

    // Highlight the default selected character
    document.querySelector(`.character-option[data-character-id="${selectedCharacterId}"]`)
        .classList.add('bg-red-700', 'border-2', 'border-yellow-400');

    // Function to update the selected character display
    function updateSelectedCharacter(characterElement) {
        const characterName = characterElement.dataset.characterName;
        const characterImage = characterElement.dataset.characterImage;
        const characterDesc = characterElement.dataset.characterDesc;

        // Update the display
        document.getElementById('selected-character-name').textContent = characterName;
        document.getElementById('selected-character-image').src = characterImage;
        document.getElementById('selected-character-image').alt = characterName;
        document.getElementById('selected-character-desc').textContent = characterDesc;

        // Update special move (this could be expanded with more character-specific data)
        let specialMove = "Hadouken";
        if (characterName === "Chun-Li") specialMove = "Hyakuretsu Kyaku";
        if (characterName === "Ken Masters") specialMove = "Shoryuken";
        if (characterName === "Guile") specialMove = "Sonic Boom";
        if (characterName === "M. Bison") specialMove = "Psycho Crusher";
        if (characterName === "Akuma") specialMove = "Raging Demon";
        if (characterName === "Cammy White") specialMove = "Spiral Arrow";
        if (characterName === "Zangief") specialMove = "Spinning Piledriver";
        if (characterName === "Dhalsim") specialMove = "Yoga Fire";

        document.querySelector('.mt-4.bg-red-900 span').textContent = `Special Move: ${specialMove}`;
    }
});