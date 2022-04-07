// Local storage
// https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
function checkLocalStorage(){
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

if(checkLocalStorage() === true){
    // Pakt de drie inputs voor kleur, tekst en maat
    const localStorageOptions = document.querySelectorAll('#shirt-customize input[type="text"], #shirt-customize input[type="radio"]');
   
    // Loopt door de inputs en iedere keer dat er iets verandert, verandert de local storage
    localStorageOptions.forEach((option) => {
        option.addEventListener('change', (e) => {
            const key = e.target.name;
            const value = e.target.value;
            localStorage.setItem(key, value);
        })
    })

    // let getFromLocalStorage = []
    // for (let i = 0; i < localStorage.length; i++){
    //     getFromLocalStorage.push(localStorage.getItem(localStorage.key(i)));
    // }
    // console.log(getFromLocalStorage)

    // Dit kan anders maar hoofd draait
    const colorLocalStorage = localStorage.getItem('kleur-options');
    const textLocalStorage = localStorage.getItem('text-options');
    const sizeLocalStorage = localStorage.getItem('maat-options');

    if(colorLocalStorage !== null) {
        document.querySelector(`input[value=${colorLocalStorage}]`).checked = true;
        // Dit nog fixen
        // changeColorOnTee('pink')
    }

    if(textLocalStorage !== null) {
        document.querySelector(`input[name='text-options']`).value = textLocalStorage;
        document.querySelector('section:first-of-type h2').textContent = textLocalStorage;
    }

    if(sizeLocalStorage !== null) {
        document.querySelector(`input[value=${sizeLocalStorage}]`).checked = true;
    }
}