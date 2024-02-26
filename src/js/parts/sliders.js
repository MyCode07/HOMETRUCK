import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('services') && window.innerWidth <= 1024) {
            new Swiper(slider, {
                modules: [Pagination, Autoplay],
                slidesPerView: "auto",
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            })
        }
        else if (slider.closest('.trucks')) {
            new Swiper(slider, {
                modules: [Pagination, Navigation, Autoplay],
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                breakpoints: {
                    300: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    600: {
                        spaceBetween: 10,
                        slidesPerView: 3,
                    },
                    1025: {
                        spaceBetween: 13,
                        slidesPerView: 4,
                    },

                }
            })
        }
        else if (section.classList.contains('offer')) {
            new Swiper(slider, {
                modules: [Pagination, Navigation, Autoplay],
                slidesPerView: 1,
                loop: true,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

            })
        }
        else if (slider.closest('.video__slider-box')) {
            new Swiper(slider, {
                modules: [Navigation, Autoplay],
                navigation: {
                    prevEl: document.querySelector(".video__top-prev"),
                    nextEl: document.querySelector(".video__top-next"),
                },
                breakpoints: {
                    300: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                        slidesPerView: "auto",
                    },
                    1025: {
                        spaceBetween: 13,
                        slidesPerView: 4,
                    },
                }
            })
        }
        else if (slider.closest('.vydacha__slider-box')) {
            new Swiper(slider, {
                modules: [Navigation, Autoplay],
                spaceBetween: 10,
                navigation: {
                    prevEl: document.querySelector(".vydacha__bottom-prev"),
                    nextEl: document.querySelector(".vydacha__bottom-next"),
                },
                breakpoints: {
                    300: {
                        slidesPerView: "auto",
                    },

                    1025: {
                        slidesPerView: 3,
                    },
                }
            })
        }
        else if (slider.closest('.news')) {
            new Swiper(slider, {
                modules: [Pagination, Navigation, Autoplay],
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                breakpoints: {
                    300: {
                        slidesPerView: "auto",
                        spaceBetween: 10,
                    },
                    1025: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                }
            })
        }
        else if (slider.closest('.single-product__images-thumbs')) {
            const thumbs = new Swiper('.single-product__images-thumbs .swiper', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 10,
            });

            new Swiper('.single-product__images-main .swiper', {
                modules: [
                    Thumbs
                ],
                spaceBetween: 20,
                slidesPerView: 1,

                thumbs: {
                    swiper: thumbs,
                },
            });
        }
    })
}