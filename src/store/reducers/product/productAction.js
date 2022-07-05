import { productActionTypes } from '../../../constants/actions.type';


export const setProductDetail = (product) => {
    return {
        type : productActionTypes.SET_PRODUCT_DETAIL,
        payload : product
    }
}

export const getProductDetail = () => {
    return {
        type : productActionTypes.GET_PRODUCT_DETAIL
    }
}
