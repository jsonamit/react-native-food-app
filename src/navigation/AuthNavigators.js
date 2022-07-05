import React,{useEffect,useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupWelcomeScreen from '../screens/auth/welcome/SignupWelcome';
import LoginScreen from '../screens/auth/login/LoginScreen';
import SplashScreen from '../splash/SplashScreen';
import OnBoardingScreen from '../onboarding/OnBoardingScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {

    const [getSplash,setSplash] = useState(true);

    useEffect(()=>{

        setTimeout(() => {
            setSplash(false);
        }, 3000);
        
    },[])
     
    return (
        <Auth.Navigator>
            <Auth.Screen 
                name='OnBoardingScreen'
                component={OnBoardingScreen}
                options= {{
                    headerShown:false
                }}
            />
            {
                getSplash ?  
                    <Auth.Screen 
                        name='SplashScreen'
                        component={SplashScreen}
                        options= {{
                        headerShown:false
                        }}
                    /> 
                : null
            }
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