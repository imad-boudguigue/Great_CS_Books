const humburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
humburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

const themeStylesheet = document.getElementById('theme');
const themeToggole = document.getElementById('theme-toggele');
const logo = document.querySelector('#logo');
console.log(logo)
themeToggole.addEventListener('click', () => {
    if(themeStylesheet.href.includes('light')){
        logo.src = '../img/Asset 3@3x.png';
        themeStylesheet.href = '../css/dark-style.css';
        themeToggole.innerText = 'إنتقل للوضع الفاتح';
    }else{
        logo.src = '../img/Asset 4@3x.png';
        themeStylesheet.href = '../css/light-style.css';
        themeToggole.innerText = 'إنتقل للوضع الغامض';
    }
});