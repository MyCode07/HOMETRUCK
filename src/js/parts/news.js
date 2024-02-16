const newsCatalogCategory = document.querySelector('.news-catalog__category');
const newsCatalogSort = document.querySelector('.news-catalog__sort');

// open menu
if (newsCatalogCategory) {
    newsCatalogCategory.addEventListener('click', (е) => {
        newsCatalogCategory.classList.toggle('_active');
    })
    newsCatalogSort.addEventListener('click', (е) => {
        newsCatalogSort.classList.toggle('_active');
    })
}