// Ingevoerde tekst op de tee zien
function getTextOnTee() {
    const textInput = document.querySelector('.text-wrapper input');
    const textTee = document.querySelector('section:first-of-type h2');
    
    textInput.addEventListener('keyup', () => {
        textTee.textContent = textInput.value;
    })
}

getTextOnTee()