import { replaceDomElements } from "./static/replace.js";
import { stickyHeader } from "./parts/header.js";

import "./parts/menu.js";
import "./parts/filter.js";
import "./parts/tabs.js";
import "./parts/news.js";

import "./parts/sliders.js";
import "./static/ticker.js";
import { playVideoAction } from "./parts/video.js";
import { calculator } from "./parts/calculator.js";

replaceDomElements();
stickyHeader();
playVideoAction();

calculator.start();


import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});



document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})