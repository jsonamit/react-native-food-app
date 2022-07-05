import React,{useContext,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthNavigators';
import AppStack from './AppStackNavigator';
import { useSelector, useDispatch } from 'react-redux';
// import { useAuth } from '../context/AuthContext';

export default function MainNavigator(props) {

    // const { getAuthState } = useAuth();
    // const {user} = await getAuthState();
    // const { signedIn } = useContext(AuthContext);

    // const stateData = useSelector((state)=>{
    //     return state.user;
    // })

    return (
        <NavigationContainer>
            {/* {
                stateData.isLoggedIn == false ? 
                    <AuthStack /> 
                : */}
                    <AppStack />
            
            {/* } */}
        </NavigationContainer>
    );
}