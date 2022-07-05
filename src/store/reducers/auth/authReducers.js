import { LOGGED_IN,LOGGED_OUT } from './authAction';

export const  initialState = {
  isLoggedIn: false,
  user: null
};

//REDUCER
const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOGGED_IN:{
            let { user } = action;

            return {...state, isLoggedIn: true, user};
      }

      case LOGGED_OUT:{
            return {...state, isLoggedIn: false, ...initialState};
      }

      default:
          return state;
  }
};

export default authReducer;