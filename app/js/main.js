const iconMenu = document.querySelector(".menu__icon");
const headerMenu = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('._lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}