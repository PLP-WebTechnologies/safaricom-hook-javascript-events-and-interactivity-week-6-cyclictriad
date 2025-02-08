// Interactive Button: Toggle Background Color
const toggleButton = document.getElementById("toggle-button");
let isColor1 = true;

toggleButton.addEventListener("click", () => {
    document.body.style.backgroundColor = isColor1 ? "#2575fc" : "#6a11cb";
    isColor1 = !isColor1;
});

// Slider: Adjust Text Size Dynamically
const textSizeSlider = document.getElementById("text-size");
const dynamicText = document.getElementById("dynamic-text");

textSizeSlider.addEventListener("input", () => {
    dynamicText.style.fontSize = `${textSizeSlider.value}px`;
});

// Modal: Open and Close
const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form Validation
const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
    let isValid = true;

    // Name Validation
    if (nameInput.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Password Validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters with one uppercase letter and one number.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Prevent Form Submission if Invalid
    if (!isValid) {
        event.preventDefault();
    }
});

// Bonus: Dropdown Menu
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdown-message");

dropdown.addEventListener("change", () => {
    const selectedValue = dropdown.value;
    if (selectedValue) {
        dropdownMessage.textContent = `You selected: ${selectedValue}`;
    } else {
        dropdownMessage.textContent = "";
    }
});