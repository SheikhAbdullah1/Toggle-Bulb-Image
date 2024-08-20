

const images = ["./Images/bulb on.jpg", "./Images/bulb of.jpg"];
let currentImageIndex = 0;

function toggleImage() {

    // Get id from Html element
    
    const imageElement = document.getElementById("abc");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];

    // Update button text
    const buttonText = currentImageIndex === 0 ? "On" : "Off";
    document.querySelector("button").textContent = buttonText;

}