// Function to handle image preview
function handleImageUpload(event, imageId) {
    const input = event.target;
    const image = document.getElementById(imageId);
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
        };
        reader.readAsDataURL(file); // Convert the image file to a data URL for display
    }
}

// Function to remove image and reset input
function removeImage(imageId, inputId) {
    const image = document.getElementById(imageId);
    const input = document.getElementById(inputId);
    image.src =
