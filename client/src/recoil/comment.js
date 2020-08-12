import { atom } from "recoil";

export const listComment = atom({
    key: 'LIST_COMMENT',
    default: {
        totalComment: null,
        listComment: []
    }
});

export const urlIdComment = atom({
    key: "URLIDCOMMENT",
    default: null
})

export const paginationComment = atom({
    key: 'PAGINATIONCOMMENT',
    default: {
        _limit: 10,
        _page: 1,
        _totalRows: 0
    }
})

