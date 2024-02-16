import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');
const contactsButon = document.querySelector('.btn-contact');

// open menu
if (burger) {
    burger.addEventListener('click', (е) => {

        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        contactsButon.classList.toggle('_active');

        if (menu.classList.contains('_open')) {
            header.classList.add('_sticky');
            lockPadding();
        }
        else {
            unLockPadding();
            header.classList.remove('_sticky');

        }
    })
}



// close menu and unlock body clicking on menu items
if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any()) {
                if (menu.classList.contains('_open')) {
                    unLockPadding();
                }
                else {
                    lockPadding()
                }
            }

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');
            body.classList.toggle('_noscroll');
        })
    })
}



// menu arrow buttom
const arrow = `<button><svg width="12" height="6" viewBox="0 0 12 6"  xmlns="http://www.w3.org/2000/svg">
<path d="M10.6209 0.721191L6.81753 4.52453C6.36836 4.97369 5.63336 4.97369 5.18419 4.52453L1.38086 0.721191"  stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)

                    if (li.closest('.header')) {
                        header.classList.toggle('_sticky')
                    }
                })
            }

            if (!isMobile.any() && li.closest('.header')) {
                li.addEventListener('mouseenter', function () {
                    header.classList.add('_sticky')
                })

                li.addEventListener('mouseleave', function () {
                    header.classList.remove('_sticky')
                })
            }

            const btnArrow = li.querySelector('.menu-arrow');
            if (btnArrow && isMobile.any()) {
                btnArrow.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}



// clsoe menu clicking not on document(not menu) area
document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if ((!targetEl.closest('header nav') || (targetEl.closest('header') && targetEl.tagName == 'NAV'))) {
        const activeMenuItems = document.querySelectorAll('nav li[data-open]');
    }

    if (targetEl.classList.contains('menu__close')) {
        burger.classList.remove('_active');
        menu.classList.remove('_open');

        document.body.classList.remove('_noscroll');
        if (!header.classList.contains('_scrolled')) {
            header.classList.remove('_open');
        }

        if (!menu.classList.contains('_open')) {
            unLockPadding();
        }
    }
})