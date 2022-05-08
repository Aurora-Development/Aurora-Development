const burgerMenu = document.getElementById('burgermenu');
document.getElementById('burgermenubutton').addEventListener('click', e => {
    e.preventDefault();
    burgerMenu.classList.toggle('show');
});