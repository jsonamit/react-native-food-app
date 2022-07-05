import { View, Text,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import {SPLASH} from '../constants/images';

export default function SplashScreen({navigation}) {

  const stateData = useSelector((state)=>{
    return state.user;
  })

  if(stateData.isLoggedIn == false) {

        setTimeout(() => {
            
            navigation.navigate('OnBoardingScreen');

        }, 3000);
  
    } else {

        setTimeout(() => {
        
            navigation.navigate('App');
    
        }, 3000);

    }

  useEffect(()=>{

    
    
  },[])

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',position:'relative'}}>
      <Image
        source={SPLASH.splash}
      />
      <Text style={{position:'absolute',color: 'white',fontSize:18,fontWeight:'700'}}>Welcome to Foodie</Text>
    </View>
  )
}