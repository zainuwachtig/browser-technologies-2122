window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;

    if(scrollY > 750) {
        document.querySelector('section:first-of-type img').classList.remove('spin')
    } else {
        document.querySelector('section:first-of-type img').classList.add('spin')
    }
    console.log(scrollY);
});