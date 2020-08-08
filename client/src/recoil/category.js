import { atom } from "recoil";

const listCategoryState = atom({
    key: 'LIST_CATEGORY',
    default: []
});

export {
    listCategoryState
}
