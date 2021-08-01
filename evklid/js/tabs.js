window.addEventListener('DOMContentLoaded', function () {
    // Табы
    document.querySelectorAll('.how-links-item').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.how-links-item').forEach(function (btnContent) {
                btnContent.classList.remove('item-active')
            })
            document.querySelectorAll('.tab-content').forEach(function (tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
            document.querySelector(`[data-path="${path}"]`).classList.add('item-active')
        })
    })

    // Меню
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    $(function () {
        $("#accordion").accordion({
            active: false,
            collapsible: true,
            heightStyle: "content",
        });
    });
})
