const listCateBtn = document.querySelectorAll('.body-category-list-each-item')
const listSubCate = document.querySelectorAll('.body-category-sub-list')


listCateBtn.forEach((cate, index) => {
    const subCate = listSubCate[index]
    cate.onclick = function () {
        document.querySelector(
            '.body-category-sub-list.body-category-sub-list-active').classList.remove('body-category-sub-list-active')
        subCate.classList.add('body-category-sub-list-active')
    }
})