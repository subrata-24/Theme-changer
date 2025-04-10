const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const savedTextColor = localStorage.getItem("textColor");

    if (savedTheme) {
        body.style.backgroundColor = savedTheme;
    } else {
        body.style.backgroundColor = "white"; // default background
    }

    if (savedTextColor) {
        body.style.color = savedTextColor;
    } else {
        body.style.color = "black"; // default text color
    }
});

// Theme change handler
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let selectedColor;
        let textColor = "white"; // default fallback text color

        if (e.target.id === 'Midnight Blue') {
            selectedColor = '#2c3e50';
        }
        if (e.target.id === 'Dark Mode') {
            selectedColor = '#121212';
        }
        if (e.target.id === 'Mint Cream') {
            selectedColor = '#f5fffa';
            textColor = '#222';
        }
        if (e.target.id === 'Rose Sunset') {
            selectedColor = '#ff6f61';
        }
        if (e.target.id === 'Forest Night') {
            selectedColor = '#2e4600';
        }
        if (e.target.id === 'Sky Lavender') {
            selectedColor = '#cbc3e3';
            textColor = '#1a1a1a';
        }

        if (selectedColor) {
            body.style.backgroundColor = selectedColor;
            body.style.color = textColor;
            localStorage.setItem("theme", selectedColor);
            localStorage.setItem("textColor", textColor);
        }
    });
});
