import { View, Text } from 'react-native'
import React from 'react';
import SearchScreen from '../screens/search-screen/SearchScreen'
import SearchResultScreen from '../screens/search-result/SearchResultScreen'
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ClientStack = createNativeStackNavigator();

export default function ClientSearchStackNavigator() {
  return (
    <ClientStack.Navigator>
        <ClientStack.Screen 
            name="Home"
            component={SearchScreen}
            options={{
              headerShown: false
            }}
        />
         <ClientStack.Screen 
            name="SearchResultScreen"
            component={SearchResultScreen}
            options={{
              headerShown: false
            }}
        />
         <ClientStack.Screen 
            name="ResturantHomeScreen"
            component={RestaurantHomeScreen}
            options={{
              headerShown: false
            }}
        />
    </ClientStack.Navigator>
  )
}