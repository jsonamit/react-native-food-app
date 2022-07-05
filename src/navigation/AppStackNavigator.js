import React,{useEffect,useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import MapScreen from '../screens/map/Map';
import DrawerNavigator from './DrawerNavigator';
import OnBoardingScreen from '../../src/onboarding/OnBoardingScreen';
import SplashScreen from '../../src/splash/SplashScreen';
import SignupWelcomeScreen from '../screens/auth/welcome/SignupWelcome';
import LoginScreen from '../screens/auth/login/LoginScreen';


const App = createNativeStackNavigator();

const Auth = createNativeStackNavigator();

export default function AppStack() {

    useEffect(()=>{

      
    },[])

    return (
        <App.Navigator>
            <App.Screen 
                name='SplashScreen'
                component={SplashScreen}
                options= {{
                headerShown:false
                }}
            /> 
    
            <App.Screen 
                name='OnBoardingScreen'
                component={OnBoardingScreen}
                options= {{
                    headerShown:false
                }}
            /> 

            <App.Screen 
                name='App'
                component={DrawerNavigator}
                options= {{
                    headerShown:false
                }}
            />

            <App.Screen 
                name='SignupWelcomeScreen'
                component={SignupWelcomeScreen}
                options= {{
                    headerShown:false
                }}
            />
            <App.Screen 
                name='SignInScreen'
                component={LoginScreen}
                options= {{
                    headerShown:false
                }}
            />

            <App.Screen 
                name='MapScreen'
                component={MapScreen}
                options= {{
                    headerShown:false
                }}
            />
        </App.Navigator>
    ) 

}


function AuthStack() {

    return (
        <Auth.Navigator>
            <Auth.Screen 
                name='SignupWelcomeScreen'
                component={SignupWelcomeScreen}
                options= {{
                    headerShown:false
                }}
            />
            <Auth.Screen 
                name='SignInScreen'
                component={LoginScreen}
                options= {{
                    headerShown:false
                }}
            />
        </Auth.Navigator>
    )
}

