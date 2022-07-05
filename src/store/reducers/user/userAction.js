import { userActionTypes } from '../../../constants/actions.type';


export const setUser = (user) => {
    return {
        type : userActionTypes.SET_USER,
        payload : user
    }
}

export const getuser = () =>{
    return {
        type : userActionTypes.GET_USER,
        payload : ''
    }
}

export const logedIn = (user) =>{
    return {
        type : userActionTypes.LOGGED_IN,
        payload : user
    }
}

export const logedOut = () =>{
    return {
        type : userActionTypes.LOGGED_OUT,
    }
}
