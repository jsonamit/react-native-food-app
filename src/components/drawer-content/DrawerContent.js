import React, {useContext,useState,useEffect} from 'react';
import {
    View,
    Text,
    Switch,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { useSelector,useDispatch } from 'react-redux';
import { COLORS } from '../../constants';
import {
    Avatar,
    Icon,
    Button
} from 'react-native-elements';
import { logedOut } from '../../store/reducers/user/userAction';

export default function DrawerContent(props) {

    const dispatch = useDispatch();

    function signOutHandleChange() {
        console.log('signOutHandleChange');
        dispatch(logedOut());

        // props.navigation.navigate('OnBoardingScreen');
    
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
            >
                <View style={{backgroundColor:COLORS.buttons}}>
                    <View style={{flexDirection:'row',paddingVertical:10,paddingLeft:20,alignItems:'center'}}>
                        <Avatar 
                            rounded
                            size={75}
                            avatarStyle={styles.avatar}
                            source={{uri: 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591'}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.white}}>Amit Kumar</Text>
                            <Text style={{fontSize:15,color:COLORS.white}}>amit@gmail.com</Text>
                        </View>

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:10}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={styles.headerCount}>1</Text>
                            <Text style={styles.headerCount}>My Favorites</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={styles.headerCount}>1</Text>
                            <Text style={styles.headerCount}>My Cart</Text>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem 
                    label= 'Payment'
                    icon={({color,size})=>(
                        <Icon 
                            type='material-community'
                            color={color}
                            size = {size}
                            name='credit-card-outline'
                        />
                    )}
                />
                <DrawerItem 
                    label= 'Promations'
                    icon={({color,size})=>(
                        <Icon 
                            type='material-community'
                            color={color}
                            size = {size}
                            name='tag-heart'
                        />
                    )}
                />
                <DrawerItem 
                    label= 'Settings'
                    icon={({color,size})=>(
                        <Icon 
                            type='material-community'
                            color={color}
                            size = {size}
                            name='cog-outline'
                        />
                    )}
                />
                <DrawerItem 
                    label= 'Help'
                    icon={({color,size})=>(
                        <Icon 
                            type='material-community'
                            color={color}
                            size = {size}
                            name='lifebuoy'
                        />
                    )}
                />

                <View style={{flex:1,borderTopWidth:3,borderTopColor:COLORS.gray5}}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkText}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch 
                                trackColor={{false:'#767577',true:'#81boff'}}
                                thumbColor= '#f4f3f4'
                            />
                        </View>
                    </View>
                </View>

                
            </DrawerContentScrollView>

            <TouchableOpacity
                onPress={signOutHandleChange} 
            >
            {/* <View
            onPress={signOutHandleChange}
            > */}
                <DrawerItem 
                        label= 'Sign Out'
                        icon={({color,size})=>(
                            <Icon 
                                type='material-community'
                                color={color}
                                size = {size}
                                name='logout-variant'
                            />
                        )}
                         
                />
                {/* </View> */}
            </TouchableOpacity>
        </View>
    )
}

const styles =StyleSheet.create({
    container : {
        flex : 1
    },
    avatar : {
        borderWidth : 4,
        borderColor : COLORS.white,
    },
    headerCount : {
        color : COLORS.white,
        fontWeight:'bold'
    },
    preferences : {
        fontSize:15,
        paddingTop: 10,
        paddingLeft : 20
    },
    switchText : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize : 15,
        paddingLeft:20,
        paddingRight: 10,
        paddingVertical:10
    },
    darkText : {
        fontWeight: 'bold',
        fontSize : 16,
        paddingTop: 10
    }
});