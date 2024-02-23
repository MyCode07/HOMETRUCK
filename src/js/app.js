import { replaceDomElements } from "./static/replace.js";
// import { maskInputs } from "./static/inputmask.js";
// import { accordeon } from "./static/accordeon.js";
import { stickyHeader } from "./parts/header.js";

import "./parts/menu.js";
import "./parts/filter.js";
import "./parts/tabs.js";
import "./parts/news.js";

import "./parts/sliders.js";
import "./static/ticker.js";
import { calculator } from "./parts/calculator.js";
import { playVideoAction } from "./parts/video.js";

// import "./parts/catalog.js";
// import "./parts/tabs.js";
// import "./parts/filter.js";
// import "./parts/input-hover.js";
// import "./parts/instructions-list.js";

// accordeon();
// maskInputs('+7 (999) 999-99-99', '._mask-phone')
replaceDomElements();
stickyHeader();
calculator();
playVideoAction();


import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});





document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})