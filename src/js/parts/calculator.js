import dhx from 'dhx-suite'

class Calculator {
    constructor() {
        this.percentage = calculatorData.percentage
        this.cashbackPercent = calculatorData.cashbackPercent
        this.sum = 0
        this.perMonth = 0
        this.cashback = 0

        this.formatter = new Intl.NumberFormat("ru");

        this.calculatorBlock = document.querySelector('.calculator');
        if (this.calculatorBlock) {
            this.banks = this.calculatorBlock.querySelectorAll('.categories-list a');
            this.ranges = this.calculatorBlock.querySelectorAll('.range');
        }
    }

    start() {
        if (!this.calculatorBlock) return;
        this.ranges.forEach(item => this.range(item))
        this.toggleBanks();
        this.calculate()
    }

    range(range) {
        if (!range) return;

        const rangeElem = range.closest('.calculator-range');
        const valueOutElem = rangeElem.querySelector('.price span');
        const min = +range.dataset.min ? +range.dataset.min : 0;
        const max = +range.dataset.max ? +range.dataset.max : 0;
        const step = +range.dataset.step ? +range.dataset.step : 1;

        const sliderRange = new dhx.Slider(range.querySelector('.range-slider'), {
            min: min,
            max: max,
            step: step,
            range: false,
            value: [min, max]
        });


        sliderRange.events.on('change', () => {
            valueOutElem.dataset.value = sliderRange.getValue()[0]
            valueOutElem.textContent = this.formatter.format(sliderRange.getValue()[0])

            this.calculate();
        });

        return sliderRange;
    }

    toggleBanks() {
        if (!this.banks.length) return;

        this.banks.forEach(bank => {
            bank.addEventListener('click', (e) => {
                e.preventDefault();

                banks.forEach(b => {
                    b.closest('li').classList.remove('_active')
                })

                bank.closest('li').classList.add('_active')
            })
        })
    }

    calculate() {
        let result = 0;
        const sum = this.calculatorBlock.querySelector('.sum .price span').dataset.value;
        const avans = this.calculatorBlock.querySelector('.avans .price span').dataset.value;
        const mounths = this.calculatorBlock.querySelector('.months .price span').dataset.value;


        result = ((this.percentage / 12) / 1 - Math.pow((1 + this.percentage / 12), -mounths)) * (sum - avans)

        console.log('summ', result, 'per month', result / mounths, 'cashback', result * 40 / 100);

        this.sum = Math.round(result);
        this.perMonth = Math.round(this.sum / mounths);
        this.cashback = Math.round(this.sum * this.cashbackPercent / 100);

        this.renderResults()
    }

    renderResults() {
        const sumElem = this.calculatorBlock.querySelector('.calculator-result__deal .price span');
        const taxElem = this.calculatorBlock.querySelector('.calculator-result__tax .price span');
        const perMountEelm = this.calculatorBlock.querySelector('.calculator-result__mounth .price span');

        sumElem.textContent = this.formatter.format(this.sum)
        taxElem.textContent = this.formatter.format(this.cashback)
        perMountEelm.textContent = this.formatter.format(this.perMonth)

    }
}

export const calculator = new Calculator();