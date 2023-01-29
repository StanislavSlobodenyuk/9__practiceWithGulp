const iconMenu = document.querySelector(".menu__icon");
const headerMenu = document.querySelector('.header-menu_mobile');
const headerClose = document.querySelector('.header-menu__close');

if (iconMenu) {
    iconMenu.addEventListener("click", function(elem){
        document.body.classList.toggle('._lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });

}
if (headerClose) {
    headerClose.addEventListener("click", function (elem) {
        document.body.classList.toggle('._lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    })
}