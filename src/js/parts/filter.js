import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

const filters = document.querySelectorAll('.filter');

if (filters.length) {
    filters.forEach(filter => {
        const openBtn = filter.querySelector('.filter__title');
        openBtn.addEventListener('click', () => {
            filter.classList.toggle('_open')
        })
    });

    const mobileFilterOpenButton = document.querySelector('.filter__open');
    const mobileFilterCloseButton = document.querySelector('.filter__close');
    const mobileFilter = document.querySelector('.catalog-sidebar');

    if (mobileFilterOpenButton) {
        mobileFilterOpenButton.addEventListener('click', () => {
            mobileFilterOpenButton.classList.add("_active")
            mobileFilter.classList.add("_open")

            lockPadding()
        })
    }

    if (mobileFilterCloseButton) {
        mobileFilterCloseButton.addEventListener('click', () => {
            mobileFilterOpenButton.classList.remove("_active")
            mobileFilter.classList.remove("_open")

            unLockPadding()
        })
    }

}