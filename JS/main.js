document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuList = document.getElementById('menu-list');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        menuList.classList.toggle('show');
    });
});