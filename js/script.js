const Hamburger = document.querySelector('#btnHamburger');
const openMenu = document.querySelector('.has-fade');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu')

Hamburger.addEventListener('click', () => {
        console.log('click hamburger');

        if (Hamburger.classList.contains('open')) {
            Hamburger.classList.remove('open');
            openMenu.classList.add('hide')
            body.classList.remove('noscroll')
            menu.classList.remove('header__menu')
        }
        else {
            Hamburger.classList.add('open');
            openMenu.classList.remove('hide')
            body.classList.add('noscroll')
            menu.classList.add('header__menu')
        }
    });
