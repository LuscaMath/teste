/*Menu humburger*/

const el = document.querySelector('.menu-mobile-icon');

el.addEventListener('click',()=>{

    var menuItems = document.querySelector('.menuMobile-items');
    if (menuItems.classList.contains('show')) {
        menuItems.classList.add('hidde')
        menuItems.classList.remove('show')
    }else {
        menuItems.classList.add('show')
        menuItems.classList.remove('hidde')
    }
});