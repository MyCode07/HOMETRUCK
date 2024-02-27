import { isMobile } from "../utils/isMobile.js";

function updateTooltipPosition(e, tooltip) {
    const xOffset = 0;
    const yOffset = -10;

    // Учитываем смещение прокрутки страницы
    const tooltipRight = e.target.getBoundingClientRect().right;
    const tooltipTop = e.target.getBoundingClientRect().top;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    const slodeToRightSide = window.innerWidth - tooltipRight


    // Вычисляем позицию подсказки
    const tooltipX = tooltipRight + xOffset;
    const tooltipY = tooltipTop + yOffset;

    tooltip.style.top = tooltipY + 'px';

    if (!isMobile.any()) {
        if (slodeToRightSide <= tooltipWidth + 20) {
            tooltip.style.left = tooltipRight - tooltipWidth + 'px';

        }
        else {
            tooltip.style.left = tooltipX + 'px';
        }
    }
    else {
        tooltip.style.left = '50%';
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
}