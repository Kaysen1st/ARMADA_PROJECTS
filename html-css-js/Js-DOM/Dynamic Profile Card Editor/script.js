
// Function to update name
function updateName() {
    const nameInput = document.getElementById('nameInput');
    const profileName = document.getElementById('profileName');
    
    if (nameInput.value.trim() !== '') {
        profileName.textContent = nameInput.value;
    }
}

// Function to update bio
function updateBio() {
    const bioInput = document.getElementById('bioInput');
    const profileBio = document.getElementById('profileBio');
    
    if (bioInput.value.trim() !== '') {
        profileBio.textContent = bioInput.value;
    }
}

// Function to update profile image
function updateImage() {
    const imageInput = document.getElementById('imageInput');
    const profileImage = document.getElementById('profileImage');
    
    if (imageInput.value.trim() !== '') {
        // Store current src for fallback
        const currentSrc = profileImage.getAttribute('src');
        
        // Update image source
        profileImage.setAttribute('src', imageInput.value);
        
        // Handle image load errors
        profileImage.onerror = function() {
            profileImage.setAttribute('src', currentSrc);
            alert('Invalid image URL. Please try again.');
        };
    }
}

// Function to update background color of the entire profile card
function updateBackgroundColor() {
    const bgColorInput = document.getElementById('bgColorInput');
    const profileCard = document.getElementById('profileCard');
    
    // Create HSL color based on slider value
    const hue = bgColorInput.value;
    profileCard.style.backgroundColor = `hsl(${hue}, 70%, 90%)`;
}
