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
        type: Types.CHANT_MESSAGE,
        message
    }
}

export const actDeleteProdct = product => {
    return {
        type: Types.DELETE_PRODUCT,
        product
    }
}