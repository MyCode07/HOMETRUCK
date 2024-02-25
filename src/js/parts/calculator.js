import dhx from 'dhx-suite'

const calculatorBlock = document.querySelector('.calculator');;

const formatter = new Intl.NumberFormat("ru");
function range(range) {
    if (!range) return;

    const rangeElem = range.closest('.calculator-range');
    const valueOutElem = rangeElem.querySelector('.price span');
    const min = +range.dataset.min ? +range.dataset.min : 0;
    const max = +range.dataset.max ? +range.dataset.max : 0;
    const step = +range.dataset.step ? +range.dataset.step : 1;
    const inputMin = range.querySelector('.range-min');
    const inputMax = range.querySelector('.range-max');

    const sliderRange = new dhx.Slider(range.querySelector('.range-slider'), {
        min: min,
        max: max,
        step: step,
        range: false,
        value: [min, max]
    });


    sliderRange.events.on('change', function () {
        valueOutElem.textContent = formatter.format(sliderRange.getValue()[0])
    });


    return sliderRange;
}


const banks = document.querySelectorAll('.calculator .categories-list a');
function toggleBanks() {
    if (!banks.length) return;

    banks.forEach(bank => {
        bank.addEventListener('click', (e) => {
            e.preventDefault();

            banks.forEach(b => {
                b.closest('li').classList.remove('_active')
            })

            bank.closest('li').classList.add('_active')
        })
    })
}
const ranges = document.querySelectorAll('.range');

class Calculator {
    constructor() {

    }

    start() {
        ranges.forEach(item => range(item))
        toggleBanks();
    }
}

export const calculator = new Calculator();