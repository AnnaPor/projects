function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76683470863523, 37.629450857587505],
        zoom: 14
    });
    var myPlacemark = new ymaps.Placemark([55.76927294679334, 37.63846199140166], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Ellipse.jpg',
        iconImageSize: [12, 12],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
}

document.addEventListener('DOMContentLoaded', function () {
    // Табы
    document.querySelectorAll('.project__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.project__btn').forEach(function (btnContent) {
                btnContent.classList.remove('project__active')
            })
            document.querySelectorAll('.page').forEach(function (tabContent) {
                tabContent.classList.remove('page__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('page__active')
            document.querySelector(`[data-path="${path}"]`).classList.add('project__active')

        })
    })
    document.querySelectorAll('.service__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.service__btn').forEach(function (btnContent) {
                btnContent.classList.remove('service__btn__active')
            })
            document.querySelectorAll('.service__page').forEach(function (tabContent) {
                tabContent.classList.remove('service__active')
            })
            document.querySelector('.service__scroll').classList.toggle('scroll__active')

            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (addClass) {
                addClass.classList.add('service__active')
            })
            document.querySelectorAll(`[data-path="${path}"]`).forEach(function (addClass) {
                addClass.classList.add('service__btn__active')
            })

        })
    })

    //Валидация 
    function Validation(className, borderStyle) {
        let form = document.querySelector(className)
        let arr = form.querySelectorAll('.form__field')

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let errors = form.querySelectorAll('.error')
            for (let i = 0; i < errors.length; i++) {
                errors[i].remove()
            }
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i].value) {
                    let error = document.createElement('div')
                    error.classList.add('error')
                    error.innerHTML = 'Недопустимый формат'
                    form[i].parentElement.insertBefore(error, arr[i])
                    arr[i].style.border = borderStyle;

                }
            }
        })
    }

    Validation('.form__validate', "1px solid #ff3030")
    Validation('.about__form', "1px solid #f06666")

    //поиск
    document.querySelector('.header__search__mini .loupe').addEventListener('click', function () {
        document.querySelector('.header__search__mini').classList.add('search__active')
    })
    document.querySelector('.header__search__mini .cross').addEventListener('click', function () {
        document.querySelector('.header__search__mini').classList.remove('search__active')
    })

    //бургер
    let headerMenu = document.querySelector('.header__menu')
    document.querySelector('.header__burger').addEventListener('click', function () {
        document.body.classList.add('_lock')
        headerMenu.classList.add('menu__active')
        document.querySelector('.burger__cross').setAttribute("style", "display: block")
    })

    document.querySelector('.burger__cross').addEventListener('click', function () {
        document.body.classList.remove('_lock')
        headerMenu.classList.remove('menu__active')
        document.querySelector('.burger__cross').removeAttribute("style", "display: block")
    })

    document.querySelector('.contacts .cross').addEventListener('click', function () {
        document.querySelector('.contacts .grid__item__3').classList.add('hide')
    })

    //Плавный переход
    const smoothLinks = document.querySelectorAll('.header a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            if (headerMenu.classList.contains('menu__active')) {
                document.body.classList.remove('_lock')
                headerMenu.classList.remove('menu__active')
                document.querySelector('.burger__cross').removeAttribute("style", "display: block")
            }

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
})