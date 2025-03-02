
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const allProductsBtn = document.getElementById('all-products-btn');
    const allProductsMenu = document.getElementById('all-products-menu');

    allProductsBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        allProductsMenu.classList.toggle('hidden');
        allProductsMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!allProductsBtn.contains(event.target) && !allProductsMenu.contains(event.target)) {
            allProductsMenu.classList.add('hidden');
            allProductsMenu.classList.remove('show');
        }
    });
});
