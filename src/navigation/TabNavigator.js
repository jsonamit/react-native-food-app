import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/home/HomeScreen';
import MyAccount from '../screens/MyAccount/MyAccountScreen';
import OrderScreen from '../screens/order/OrderScreen';
import SearchScreen from '../screens/search-screen/SearchScreen';
import ClientSearchStackNavigator from './ClientSearchStackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor : '#ff8c52'
            }}
        >
            <Tab.Screen 
                name='HomeScreen'
                component={HomeScreen}
                options = {{
                    headerShown:false,
                    tabBarLabel: 'Home',
                    tabBarIcon : ({color,size})=>(
                        <Icon 
                            name='home'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name='Account'
                component={MyAccount}
                options = {{
                    headerShown:false,
                    tabBarLabel: 'Account',
                    tabBarIcon : ({color,size})=>(
                        <Icon 
                            name='person'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name='Orders'
                component={OrderScreen}
                options = {{
                    headerShown:false,
                    tabBarLabel: 'Orders',
                    tabBarIcon : ({color,size})=>(
                        <Icon 
                            name='view-list'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name='Search'
                component={ClientSearchStackNavigator}
                options = {{
                    headerShown:false,
                    tabBarLabel: 'Search',
                    tabBarIcon : ({color,size})=>(
                        <Icon 
                            name='search'
                            type='material'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icons : {
        fontWeight:'bold',
    }
})