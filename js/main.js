const humburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
humburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});
const switsh = document.querySelector('#checkbox');
const txt = document.querySelector('.swit');

switsh.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if( document.body.classList.contains('dark')){
        txt.textContent = 'switch Light Mode!'
    }else{
        txt.textContent = 'switch Dark Mode!'
    }
});
