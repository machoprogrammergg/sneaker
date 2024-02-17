let menuContainer = document.getElementById('menu');
let para = document.getElementById('menu-btn');
let finPurch = document.getElementById("finish-purchase");
let returnB = document.getElementById('return-to-home');

returnB.addEventListener('click', function() {
    successScreen.style.visibility = 'collapse';
    window.location.href = 'index.html';
})

function linkToCheckout() {
    window.location.href = 'checkout.html';
}

function showMenu() {
    menuContainer.style.transform = 'scaleY(1)';
    para.style.visibility = 'collapse';
}

function closeMenu() {
    menuContainer.style.transform = 'scaleY(0)'
    para.style.visibility = 'visible';
}

