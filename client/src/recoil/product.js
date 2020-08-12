import { atom } from "recoil";

export const productPageHome = atom({
    key: 'PRODUCTPAGEHOME',
    default: []
})

export const productViewState = atom({
    key: 'PRODUCT_VIEW_STATE',
    default: []
})

export const paginationPageHome = atom({
    key: 'PAGINATIONPAGEHOME',
    default: {
        _limit: 8,
        _page: 1,
        _totalRows: 0
    }
})

export const listProductState = atom({
    key: 'LIST_PRODUCT',
    default: []
});

export const pagination = atom({
    key: 'PAGINATION',
    default: {
        _limit: 10,
        _page: 1,
        _totalRows: 0
    }
})

export const productDetail = atom({
    key: "PRODUCT_DETAIL",
    default: []
})

export const listProductCategory = atom({
    key: "LIST_PRODUCT_CATEGORY",
    default: []
})

export const addViewCard = (cart, item) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.product_id === item.product_id);

    if (foundIndex >= 0) {
        newCart[foundIndex] = {
            ...cart[foundIndex],
            // amount: cart[foundIndex].amount + 1,
        };
        return newCart;
    }
    // Add new item
    newCart.push({
        product_id: item.product_id,
        category_id: item.category_id,
        discount: item.discount,
        price: item.price,
        image: item.image,
        product_name: item.product_name,
        amount: 1,
    });

    return newCart;
};


