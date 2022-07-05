import { productActionTypes } from '../../../constants/actions.type';

const initialState = {
    product : { }
}

export const productReducers = (state = initialState,{ type,payload }) => {
    switch(type) {
        case productActionTypes.SET_PRODUCT_DETAIL : 
            return { ...state, product: payload }

        default : 
            return state
    }
}
