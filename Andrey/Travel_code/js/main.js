$(function () {
    /*header-form*/

    const searchCancel = document.querySelector('.header__search-cancel');
    const searchBtn = document.querySelector('.header__input-search');
    const searchForm = document.querySelector('.header__search');

    searchBtn.onclick = function () {
        searchCancel.classList.add('active');
        searchBtn.classList.add('active');
        searchForm.classList.add('active');
    };

    searchCancel.onclick = function () {
        searchCancel.classList.remove('active');
        searchBtn.classList.remove('active');
        searchForm.classList.remove('active');
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

    $('.menu-btn').click(function (event) {
       $('.menu').toggleClass('show');
       $('.menu-btn').toggleClass('show');
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
            line.classList.remove('liner')
        })
    }

    /*------------------------------------*/

})
