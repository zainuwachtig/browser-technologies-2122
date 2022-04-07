// Verandert de kleur van de tee
function changeColorOnTee(color) {
    // Selecteert alle stukjes uit de tee
    const tee = document.querySelectorAll('.st1');
    
    tee.forEach((el) => {
        el.style.fill = color;
    })
}

// Gekozen kleur op de tee zien
function getColorOnTee() {
    const colorPicker  = document.querySelectorAll('fieldset:nth-of-type(1) input');
    
    colorPicker.forEach((color) => {
        color.addEventListener('change', (e) => {
            const label = e.target.nextSibling.nextSibling
            // getComputedStyle haalt de desbetreffende backgroundcolor van het label
            changeColorOnTee(getComputedStyle(label).backgroundColor);
        })
    }) 
}

// Ingevoerde tekst op de tee zien
function getTextOnTee() {
    const textInput = document.querySelector('.text-wrapper input');
    const textTee = document.querySelector('section:first-of-type h2');
    
    textInput.addEventListener('keyup', function() {
        textTee.textContent = this.value;
    })
}

getColorOnTee();
getTextOnTee();