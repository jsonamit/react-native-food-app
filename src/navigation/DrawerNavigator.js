import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import TabNavigator from '../navigation/TabNavigator';
import {COLORS} from '../constants';
import BusinessScreen from '../screens/business/BusinessScreen';
import DrawerContent from '../components/drawer-content/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
        drawerContent={props=> <DrawerContent {...props} />}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Drawer.Screen 
            name='ClientTab'
            component={TabNavigator}
            options = {{
                title : 'Client',
                drawerIcon : ({focused,size})=>(
                    <Icon 
                        name='home'
                        type='material-community'
                        color={focused ? '#7cc' : COLORS.gray2}
                        size ={size}
                    />
                )
            }}
        />
        <Drawer.Screen 
            name='Business Console'
            component={BusinessScreen}
            options = {{
                title : 'Client',
                drawerIcon : ({focused,size})=>(
                    <Icon 
                        name='business'
                        type='material'
                        color={focused ? '#7cc' : COLORS.gray2}
                        size ={size}
                    />
                )
            }}
        />
    </Drawer.Navigator>
  )
}