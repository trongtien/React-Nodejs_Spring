import { atom } from "recoil";

const listProductState = atom({
    key: 'LIST_PRODUCT',
    default: []
});

const pagination = atom({
    key: 'PAGINATION',
    default: {
        _limit: 1,
        _page: 0
    }
})

export {
    listProductState,
    pagination
}
