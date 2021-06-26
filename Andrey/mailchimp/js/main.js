const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scrollCounter = window.scrollY;

    if (scrollCounter > 150) {
        header.classList.add('header-fixed')
    }
    else {
        header.classList.remove('header-fixed')
    }
})