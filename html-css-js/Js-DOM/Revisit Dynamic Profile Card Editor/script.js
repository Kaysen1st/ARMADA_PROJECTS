// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const updateButton = document.getElementById('updateProfileButton');
    const nameInput = document.getElementById('nameInput');
    const bioInput = document.getElementById('bioInput');
    const imageInput = document.getElementById('imageInput');
    const bgColorInput = document.getElementById('bgColorInput');
    
    const profileName = document.getElementById('profileName');
    const profileBio = document.getElementById('profileBio');
    const profileImage = document.getElementById('profileImage');
    const profileCard = document.getElementById('profileCard');
    
    // Store the original image source for fallback in case of errors
    const originalImageSrc = profileImage.getAttribute('src');
    
    // Function to update the profile name
    function updateName() {
        const newName = nameInput.value.trim();
        if (newName !== '') {
            profileName.textContent = newName;
            return true;
        }
        return false;
    }
    
    // Function to update the profile bio
    function updateBio() {
        const newBio = bioInput.value.trim();
        if (newBio !== '') {
            profileBio.textContent = newBio;
            return true;
        }
        return false;
    }
    
    // Function to update the profile image
    function updateImage() {
        const newImageUrl = imageInput.value.trim();
        if (newImageUrl !== '') {
            // Create a new image element to test if the URL is valid
            const testImage = new Image();
            testImage.onload = function() {
                // If image loads successfully, update the profile image
                profileImage.setAttribute('src', newImageUrl);
            };
            testImage.onerror = function() {
                // If image fails to load, keep the current image and show an error
                console.error('Invalid image URL. Using original image.');
                // You could also display an error message to the user here
            };
            testImage.src = newImageUrl;
            return true;
        }
        return false;
    }
    
    // Function to update the background color
    function updateBackgroundColor() {
        const hue = bgColorInput.value;
        profileCard.style.backgroundColor = `hsl(${hue}, 70%, 95%)`;
        return true;
    }
    
    // Master function to update the entire profile
    function updateProfile() {
        let updated = false;
        
        // Call all update functions and track if any changes were made
        updated = updateName() || updated;
        updated = updateBio() || updated;
        updated = updateImage() || updated;
        updated = updateBackgroundColor() || updated;
        
        // Provide feedback to the user
        if (updated) {
            console.log('Profile updated successfully!');
            // You could also show a success message on the page
        } else {
            console.log('No changes were made to the profile.');
            // You could show a message asking the user to enter some data
        }
    }
    
    // Add event listener to the update button
    updateButton.addEventListener('click', updateProfile);
    
    // Optional: Add event listeners for Enter key in input fields
    const inputFields = [nameInput, bioInput, imageInput];
    inputFields.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                updateProfile();
            }
        });
    });
});