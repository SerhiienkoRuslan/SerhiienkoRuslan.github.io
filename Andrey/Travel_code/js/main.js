$(function () {
    /*header-form*/

    const search = document.querySelector('.search');
    const inputSearch = document.querySelector('.header__input-search');
    const cancel = document.querySelector('.header__search-cancel');
    const searchBlock = document.querySelector('.header__search');

    search.onclick = function () {
        cancel.classList.remove('display-none')
        inputSearch.classList.remove('display-none')
        searchBlock.classList.add('search-center')
    };

    cancel.onclick = function () {
        cancel.classList.add('display-none')
        inputSearch.classList.add('display-none')
        searchBlock.classList.remove('search-center')
    };

    /*------------------------------------*/

    /*account appearing and disappearing*/

    const accountBtn = document.querySelector('.header__btn--account');
    const account = document.querySelector('.account');
    const accountCancel = document.querySelector('.account__cancel');

    accountBtn.onclick = function () {
        account.classList.add('account-form')
    };

    accountCancel.onclick = function () {
      account.classList.remove('account-form')
    };

    /*------------------------------------*/

    /*menu appearing and disappearing*/

    const pageWidth = document.documentElement.clientWidth;
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const main = document.querySelector('.main');

    function pageWidthCheck() {
        if (pageWidth <= 768) {
            menuBtn.classList.remove('display-none')
        }
        else {
            menuBtn.classList.add('display-none')
        }
    }

    pageWidthCheck();

    menuBtn.addEventListener('click', function () {
        if (menu.classList.contains('up-side-menu')) {
            menu.classList.remove('up-side-menu')
            main.classList.remove('margin-top')
            main.classList.add('margin-top-off')
        }
        else {
            menu.classList.add('up-side-menu')
            main.classList.add('margin-top')
            main.classList.remove('margin-top-off')
        }
    });

    /*------------------------------------*/

    /*sliders*/

    $('.about__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.customers__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /*------------------------------------*/

    /*slider line-timer*/

    const slickArrow = document.querySelectorAll('.slick-arrow');
    const line = document.querySelector('.liner')

    for (let item of slickArrow) {
        item.addEventListener('click', function () {
                line.classList.add('display-none')
        })
    }

    /*------------------------------------*/

})
