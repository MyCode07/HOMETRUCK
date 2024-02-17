import dhx from 'dhx-suite'

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

const ranges = document.querySelectorAll('.range');

export const calculator = () => {
    if (!ranges.length) return;

    ranges.forEach(item => range(item))
}