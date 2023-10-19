const box = document.querySelector('.box');
const h1 = document.querySelector('.box h1');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const translateX = Math.min(scrollY * 0, 0);
    const translateY = Math.min(scrollY * 1, 460); 

    h1.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    
    function toggleNavbar() {
        if (window.scrollY > 850) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }
    }

    toggleNavbar();

    window.addEventListener('scroll', toggleNavbar);
});

