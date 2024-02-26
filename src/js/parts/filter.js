import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

const filters = document.querySelectorAll('.filter');
const hiddenPriceInput = document.querySelector('.filter__price input[name="price"]');
const priceFrom = document.querySelector('.filter__price input[name="price-from"]');
const priceTo = document.querySelector('.filter__price input[name="price-to"]');
const priceInputs = document.querySelectorAll('.filter__price .price-text');
const priceRanges = document.querySelectorAll('.filter__price .price-range');

let minPrice = 0;
let maxPrice = 0;

function setHiddenPriceInput(min, max) {
    if (hiddenPriceInput) {
        hiddenPriceInput.dataset.min = +min
        hiddenPriceInput.dataset.max = +max
    }
}

function getpPriceRange(min, max, range) {
    const minPrice = +range.dataset.min
    const maxPrice = +range.dataset.max

    console.table(min >= minPrice && max <= maxPrice);
    if (min >= minPrice && max <= maxPrice) {
        range.checked = true
        return;
    }
}

if (priceInputs.length) {
    priceInputs.forEach(input => {
        input.addEventListener('input', () => {
            minPrice = +priceFrom.value;
            maxPrice = +priceTo.value;

            setHiddenPriceInput(minPrice, maxPrice)

            if (priceRanges.length) {
                priceRanges.forEach(range => {
                    range.checked = false

                    getpPriceRange(minPrice, maxPrice, range);
                });
            }
        })
    })
}

if (priceRanges.length) {
    priceRanges.forEach(range => {

        range.addEventListener('change', () => {
            if (priceInputs.length) {
                priceInputs.forEach(input => {
                    input.value = ''
                });

                minPrice = +range.dataset.min;
                maxPrice = +range.dataset.max;

                priceFrom.value = minPrice
                priceTo.value = maxPrice

                setHiddenPriceInput(range.dataset.min, range.dataset.max)
            }
        })
    });
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    // if (maxPrice < minPrice) {
    //     maxPrice = hiddenPriceInput.max
    //     setHiddenPriceInput(minPrice, maxPrice)

    //     priceTo.value = maxPrice
    // }
    // if (minPrice < hiddenPriceInput.min) {
    //     minPrice = hiddenPriceInput.min
    //     setHiddenPriceInput(minPrice, maxPrice)

    //     priceFrom.value = minPrice
    // }

    if (targetEl.classList.contains('sort')) {
        targetEl.classList.toggle('_active');
        const span = targetEl.querySelector('span');

        if (targetEl.classList.contains('_active')) {
            span.textContent = span.dataset.textAsc
        }
        else {
            span.textContent = span.dataset.textDesc
        }
    }

    if (targetEl.hasAttribute('data-cat') && targetEl.closest('.categories-list')) {
        e.preventDefault();
        const activeTag = targetEl.closest('.categories-list').querySelector('[data-cat]._active');
        activeTag.classList.remove('_active')
        targetEl.classList.add('_active')
    }
})

if (filters.length) {
    filters.forEach(filter => {
        const openBtn = filter.querySelector('.filter__title');

        if (openBtn) {
            openBtn.addEventListener('click', () => {
                filter.classList.toggle('_open')
            })
        }

        const checkBoxes = filter.querySelectorAll('input[type="checkbox"]');
        const checkBoxAll = filter.querySelector('input[type="checkbox"]._all');
        if (checkBoxes.length) {
            checkBoxes.forEach(input => {

                input.addEventListener('input', () => {
                    let checkedInputs = checkCheckedInputCount(input);

                    if (input.classList.contains('_all')) {
                        checkBoxAll.checked = true

                        checkBoxes.forEach(item => {
                            if (!item.classList.contains('_all')) {
                                item.checked = false
                            }
                        })
                    }
                    else {
                        checkBoxAll.checked = false

                        if (checkedInputs === 0) {
                            checkBoxAll.checked = true
                        }
                    }
                })
            })
        }

        function checkCheckedInputCount(input) {
            const checkBoxes = input.closest('.filter').querySelectorAll('input[type="checkbox"]')
            let checked = 0;
            [...checkBoxes].filter(item => {
                if (item.checked) {
                    checked++
                }
            })

            return checked;
        }

    });
}

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