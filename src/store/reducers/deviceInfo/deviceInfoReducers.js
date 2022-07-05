import { deviceInfoActionTypes } from '../../../constants/actions.type';

const initialState = {
    deviceInfo: {}
}

export const deviceInfoReducers = (state = initialState,{ type,payload }) => {
    switch(type) {
        case deviceInfoActionTypes.SET_DEVICE_INFO : 
            return { ...state, deviceInfo: payload }

        case deviceInfoActionTypes.GET_DEVICE_INFO : 
            return { ...state.deviceInfo }

        default : 
            return state
    }
}
