import { atom } from "recoil";
import { Toast } from "reactstrap";

export const cardState = atom({
    key: "CARD",
    default: []
})

export const billState = atom({
    key: "BILL",
    default: {
        countProduct: null,
        totalMonney: null
    }
})


export const addToCart = (cart, item) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.product_id === item.product_id);

    if (foundIndex >= 0) {
        newCart[foundIndex] = {
            ...cart[foundIndex],
            quantity: cart[foundIndex].quantity + 1,
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
        name: item.name,
        quantity: 1,
    });

    return newCart;
};

export const deleteCard = (cart, item) => {
    const newCart = [...cart];
    const foundIndex = newCart.findIndex(x => x.product_id === item.product_id);
    if (foundIndex !== -1) {
        newCart.splice(item, 1)
        return newCart;
    }
    return newCart
}

export const countAllProduct = (card) => {
    let countAll = 0;
    for (let i = 0; i < card.length; i++) {
        card[i].quantity === undefined ? countAll = 0 : countAll += card[i].quantity
    }
    return countAll
}

export const totalMoney = (card) => {
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        if (card[i].price === undefined && card[i].quantity === undefined)
            total = 0
        else
            total += (card[i].price * card[i].quantity)
    }
    return total
}