import * as types from './../constants/ActionType';

let initialState = [
    {
        product: {
            id: 1,
            name: 'iphone xs',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'do apple sản xuất',
            price: 500,
            rating: 5,
            inventory: 10
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'xiaomi s1',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'do chine sản xuất',
            price: 200,
            rating: 2,
            inventory: 7
        },
        quantity: 4
    }
]

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART: 
            console.log(action);
            return [...state];
        default: return [...state];
    }
}

export default cart;