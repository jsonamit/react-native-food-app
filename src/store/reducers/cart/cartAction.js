import { cartActionTypes } from '../../../constants/actions.type';


export const addToCart = (cart) => {
    return {
        type : cartActionTypes.ADD_TO_CART,
        payload : cart
    }
}

export const getTotal = () =>{
    return {
        type : cartActionTypes.GET_TOTAL,
        payload : ''
    }
}

export const getAllProduct = (cart) =>{
    return {
        type : cartActionTypes.GET_ALL_PRODUCT,
        payload : cart
    }
}

export const deleteProduct = (cart) =>{
    return {
        type : cartActionTypes.DELETE_PRODUCT,
        payload : cart
    }
}

export const addQuantity = (cart) =>{
    return {
        type : cartActionTypes.ADD_QUANTITY,
        payload : cart
    }
}