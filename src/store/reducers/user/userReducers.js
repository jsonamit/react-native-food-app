import {userActionTypes} from '../../../constants/actions.type';

const initialState = {
    isLoggedIn: false,
    user: {}
}

export const userReducers = (state = initialState,{ type,payload }) => {
    switch(type) {
        case userActionTypes.SET_USER : 
            return { ...state, user: payload }

        case userActionTypes.GET_USER : 
            return { ...state,user: payload }

        case userActionTypes.LOGGED_IN:{
                let { user } = payload;
    
                return {...state, isLoggedIn: true, user};
          }
    
          case userActionTypes.LOGGED_OUT:{
                return {...state, isLoggedIn: false, ...initialState};
          }

        default : 
            return state
    }
}
