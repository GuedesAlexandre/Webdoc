

var menuContainer = document.getElementById('menuContainer');
var burgerMenu = document.getElementById('burgerMenu');
var closeBtn = document.getElementById('closeBtn');

burgerMenu.addEventListener('click', function() {
    menuContainer.style.right = '0';
    menuContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    menuContainer.style.right = '-100%';
    menuContainer.style.display = 'none';
});

