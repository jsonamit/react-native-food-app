import { deviceInfoActionTypes } from '../../../constants/actions.type';


export const setDeviceInfo = (device) => {
    return {
        type : deviceInfoActionTypes.SET_DEVICE_INFO,
        payload : device
    }
}

export const getsetDeviceInfo = () =>{
    return {
        type : deviceInfoActionTypes.GET_DEVICE_INFO,
    }
}
