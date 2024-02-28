import { isMobile } from "../utils/isMobile.js";

function updateTooltipPosition(e, tooltip) {
    const xOffset = 0;
    const yOffset = -10;

    const elemRight = e.target.getBoundingClientRect().right;
    const elemHeight = e.target.getBoundingClientRect().height;
    const elemTop = e.target.getBoundingClientRect().top;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    const tooltipHeight = tooltip.getBoundingClientRect().height;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const tooltipX = elemRight + xOffset;
    const tooltipY = elemTop + scrollTop + yOffset;

    const slideToRightSide = window.innerWidth - elemRight


    if (tooltipHeight > elemTop) {
        tooltip.style.top = tooltipY + tooltipHeight + elemHeight - yOffset + 'px';
    }
    else {
        tooltip.style.top = tooltipY + 'px';
    }

    if (slideToRightSide <= tooltipWidth + 20) {
        if (elemRight - tooltipWidth <= 10) {
            tooltip.style.left = 10 + 'px';
        }
        else {
            tooltip.style.left = elemRight - tooltipWidth + 'px';
        }
    }
    else {
        tooltip.style.left = tooltipX + 'px';
    }

    if (e.target.closest('.catalog-sidebar')) {
        document.querySelector('.catalog-sidebar').addEventListener('scroll', (e) => {
            scrollTop = e.target.scrollTop;
            tooltip.style.top = tooltipY - scrollTop + 'px';
        })
    }
    else {
        window.addEventListener('scroll', (e) => {
            scrollTop = e.scrollTop;
            tooltip.style.top = tooltipY - scrollTop + 'px';
        })
    }
}


function moveToolTip(e, tooltipText) {
    toolTipElem.innerHTML = tooltipText;
    toolTipElem.style.display = 'block';
    updateTooltipPosition(e, toolTipElem);
}

const toolTipElem = document.querySelector('.tooltip');

export const toolTipAction = () => {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    if (!tooltips.length) return;

    toolTipElem.addEventListener('click', () => {
        toolTipElem.style.display = 'none'
    })

    tooltips.forEach(item => {
        const tooltipText = item.dataset.tooltip;

        if (!isMobile.any()) {
            item.addEventListener('mouseenter', (e) => moveToolTip(e, tooltipText));
            item.addEventListener('mouseleave', () => toolTipElem.style.display = 'none');
        }
        else {
            const svg = item.querySelector('svg');
            if (svg) {
                svg.addEventListener('click', (e) => {
                    svg.classList.toggle('_clicked');
                    if (svg.classList.contains('_clicked')) {
                        moveToolTip(e, tooltipText)
                    }
                    else {
                        toolTipElem.style.display = 'none'
                    }
                })
            }
        }
    })

    document.addEventListener('click', function (e) {
        let targetEl = e.target;
        const activeToolTip = document.querySelector('[data-tooltip] ._clicked');
        if (!targetEl.hasAttribute('data-tooltip') && !targetEl.closest('[data-tooltip]') && activeToolTip && toolTipElem) {
            activeToolTip.classList.remove('_clicked');
            toolTipElem.style.display = 'none'
        }
    })
}