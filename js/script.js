const Hamburger = document.querySelector('#btnHamburger');
const openMenu = document.querySelector('.has-fade');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu');


Hamburger.addEventListener('click', () => {
        console.log('click hamburger');

        if (Hamburger.classList.contains('open')) {
            Hamburger.classList.remove('open');
            body.classList.remove('noscroll');
            menu.classList.remove('header__menu');
            openMenu.classList.add('hide');
            
        }
        else {
            openMenu.classList.remove('hide');
            Hamburger.classList.add('open');
            body.classList.add('noscroll');
            menu.classList.add('header__menu');
        }
    });
