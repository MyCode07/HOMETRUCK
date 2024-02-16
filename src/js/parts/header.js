export const stickyHeader = () => {
    const header = document.querySelector('header');
    if (!header) return

    let headerheigth = header.getBoundingClientRect().height;
    if (window.innerWidth > 1024) headerheigth = header.getBoundingClientRect().height;
    else headerheigth = 30;

    const sticky = () => {
        if (window.scrollY > headerheigth) {
            header.classList.add('_scrolled')
        }
        else {
            header.classList.remove('_scrolled')
        }
    }

    sticky();
    window.addEventListener('scroll', sticky);
}