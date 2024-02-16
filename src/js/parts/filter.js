const filters = document.querySelectorAll('.filter');
const filterTitle = document.querySelector('.filter__title');
const clueButtons = document.querySelectorAll('.clue-button');


if (filters.length) {
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filter.classList.add('_open')

            if (!filter.classList.contains('._open')) {
                filters.forEach(item => {
                    if (item.classList.contains('_open')) item.classList.remove('_open')
                })
                filter.classList.add('_open')
            }
            else {
                filter.classList.remove('_open')
            }
        })
    });

    const mobileFilterOpenButton = document.querySelector('.filter__open');
    const mobileFilterCloseButton = document.querySelector('.filter__close');
    const mobileFilter = document.querySelector('.catalog-sidebar');

    mobileFilterOpenButton.addEventListener('click', () => {
        mobileFilterOpenButton.classList.add("_active")
        mobileFilter.classList.add("_open")
    })

    mobileFilterCloseButton.addEventListener('click', () => {
        mobileFilterOpenButton.classList.remove("_active")
        mobileFilter.classList.remove("_open")
    })

}

if (clueButtons.length) {
    clueButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('_active')

            if (!button.classList.contains('._active')) {
                clueButtons.forEach(item => {
                    if (item.classList.contains('_active')) item.classList.remove('_active')
                })
                button.classList.add('_active')
            }
            else {
                button.classList.remove('_active')
            }
        })
    });
}
