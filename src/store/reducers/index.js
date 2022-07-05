import { combineReducers,createStore } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore,persistReducer,} from 'redux-persist';
import { cartReducers }  from './cart/cartReducers';
import { userReducers }  from './user/userReducers';
import { productReducers } from './product/productReducers';
import { deviceInfoReducers } from './deviceInfo/deviceInfoReducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducers =  combineReducers({
        user : userReducers,
        cart : cartReducers,
        product : productReducers,
        device : deviceInfoReducers
});

const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(persistedReducer)

let persistor = persistStore(store)

export { store, persistor };
