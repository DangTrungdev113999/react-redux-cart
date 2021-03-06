import * as Types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = message => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProdct = product => {
    return {
        type: Types.DELETE_PRODUCT,
        product
    }
}

export const actUpdateQuantity = (product, quantity) => {
    return {
        type: Types.UPDATE_QUANTITY,
        product,
        quantity
    }
}