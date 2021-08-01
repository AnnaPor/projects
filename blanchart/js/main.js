window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#event__btn').addEventListener('click', function () {
        var card = document.querySelectorAll('.hidden__cards')
        for (var i = 0; i < card.length; i++) {
            card[i].classList.add('is__active')
        }
        document.querySelector('#event__btn').classList.add('hidden__cards')
    })

    // Табы
    document.querySelectorAll('.catalogue__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.catalogue__btn').forEach(function (btnContent) {
                btnContent.classList.remove('btn__active')
            })
            document.querySelectorAll('.catalogue__content').forEach(function (tabContent) {
                tabContent.classList.remove('catalogue__content__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__content__active')
            document.querySelector(`[data-path="${path}"]`).classList.add('btn__active')

        })
    })

    // Деятели
    document.querySelectorAll('.catalogue__link').forEach(function (artBtn) {
        artBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.catalogue__link').forEach(function (linkContent) {
                linkContent.classList.remove('catalogue__link__active')
            })
            document.querySelectorAll('.catalogue__artist').forEach(function (tabContent) {
                tabContent.classList.remove('catalogue__is__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__is__active')
            document.querySelector(`[data-path="${path}"]`).classList.add('catalogue__link__active')
        })
    })

    //Плавный переход
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    //Меню
    document.querySelector('.header__burger').addEventListener('click', function () {
        document.querySelector('.header__burger').classList.toggle('burger')
        document.querySelector('.header__burger').classList.toggle('X')
        document.querySelector('.header__nav').classList.toggle('menu__active')
        document.querySelector('.lk').classList.toggle('menu__active')
        document.querySelector('.logo').classList.toggle('header__min__x')
        document.querySelector('.header__min__search').classList.toggle('header__min__x')
    })

    //Поиск
    document.querySelector('.mobile__search__pic').addEventListener('click', function () {
        document.querySelector('.mobile__search').classList.toggle('menu__active')
        document.querySelector('.mobile__search__pic').classList.toggle('header__container__menu')
        document.querySelector('.header__min__x').classList.toggle('menu__active')

        document.querySelector('.header__min__search__pic').addEventListener('click', function () {
            document.querySelector('.mobile__search').classList.toggle('menu__active')
            document.querySelector('.mobile__search__pic').classList.toggle('header__container__menu')
        })
        document.querySelector('.header__min__x').addEventListener('click', function () {
            document.querySelector('.mobile__search').classList.remove('menu__active')
            document.querySelector('.header__min__x').classList.remove('menu__active')
            document.querySelector('.mobile__search__pic').classList.add('menu__active')
        })
    })

    //Спойлер
    $(function () {
        $('.edition__spoiler__title').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        })
    })

    const element = document.querySelectorAll('.header__menu__list__item');
    for (var i = 0; i < element.length; i++) {
        const choices = new Choices(element[i], {
            searchEnabled: false,
            shouldSort: false,
        })
    };


})