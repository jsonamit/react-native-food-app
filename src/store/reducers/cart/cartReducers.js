import { cartActionTypes } from '../../../constants/actions.type';

const initialState = {
  items: [],
  numberCart:0,
  total: 0,
}

export const cartReducers = (state = initialState,{type,payload}) => {
    switch(type) {
        case cartActionTypes.ADD_TO_CART : 

          if(state.numberCart===0) {
            let cart = {
              id: payload.id,
              quantity:1,
              title: payload.title,
              subtitle: payload.subtitle,
              accessories : payload.accessories,
              price : payload.price,
              img : payload.img,
            } 
            state.items.push(cart); 
        } else {
          let check = false;

          state.items.map((item,key)=>{
              if(item.id===payload.id) {
                state.items[key].quantity++;
                check = true;
              }
              return true;
          });

          if(!check){
              let cart = {
                id: payload.id,
                quantity:1,
                title: payload.title,
                subtitle: payload.subtitle,
                accessories : payload.accessories,
                price : payload.price,
                img : payload.img,
              } 
              state.items.push(cart); 
          }
        }

       var total = state.items.map((p)=>p.price*p.quantity).reduce((previous, current)=>previous+current);

        return{
          ...state,
          numberCart:state.items.length,
          total
        }

        case cartActionTypes.DELETE_PRODUCT : 
          const found = state.items.findIndex((item)=>item.id===payload.id);
          if(found !== -1) {
              state.items.slice(found);
          }

          return {
              ...state
          }

        case cartActionTypes.GET_ALL_PRODUCT : 
          return {
            ...state.items
          }

        case cartActionTypes.GET_TOTAL : 
          return {
            ...state.items.length
          }

        case cartActionTypes.ADD_QUANTITY : 
          const itemFound = state.items.findIndex((item)=>item.id===payload.id);
          if(itemFound !== -1) {
            state.items[itemFound].quantity = payload.quantity;
          }

          return {
              ...state
          }

        // case cartActionTypes.DECREASE_QUANTITY : 
        //   const foundP = state.items.findIndex((item)=>item.id===payload.id);
        //   if(foundP !== -1) {
        //       state.items[foundP].quantity--;
        //   }

        //   return {
        //       ...state
        //   }

        default : 
            return state
    }
}

