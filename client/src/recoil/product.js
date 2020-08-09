import { atom } from "recoil";

const productPageHome = atom({
    key: 'PRODUCTPAGEHOME',
    default: []
})

const paginationPageHome = atom({
    key: 'PAGINATIONPAGEHOME',
    default: {
        _limit: 8,
        _page: 1,
        _totalRows: 0
    }
})

const listProductState = atom({
    key: 'LIST_PRODUCT',
    default: []
});

const pagination = atom({
    key: 'PAGINATION',
    default: {
        _limit: 10,
        _page: 1,
        _totalRows: 0
    }
})

const productDetail = atom({
    key: "PRODUCT_DETAIL",
    default: []
})

const listProductCategory = atom({
    key: "LIST_PRODUCT_CATEGORY",
    default: []
})


export {
    productPageHome,
    paginationPageHome,
    listProductState,
    pagination,
    productDetail,
    listProductCategory
}
