import React, { useState,useEffect } from 'react';
import { Text,StyleSheet,View,TextInput,ScrollView,Alert} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { Icon,Button,SocialIcon } from 'react-native-elements';
import { getUniqueId, getDevice,getDeviceName,getUserAgent,getDeviceType } from 'react-native-device-info';
import { COLORS, SIZES, PARAMETERS } from '../../../constants';
import { logedIn } from '../../../store/reducers/user/userAction';
import { setDeviceInfo } from '../../../store/reducers/deviceInfo/deviceInfoAction';
import Header from '../../../components/header/Header';
import { userData } from '../../../assets/Data';
import ActivityIndicator from '../../../components/spinner/ActivityIndicator';

const LoginScreen = ({ navigation }) => {

    useEffect(()=>{
    
    },[])

    const dispatch = useDispatch();

    const deviceData = {
        uniqueId : getUniqueId(),
        device : getDevice(),
        deviceName : getDeviceName(),
        deviceName : getDeviceName(),
        agent : getUserAgent(),
        deviceType : getDeviceType()
    };

    const [getUser,setUser] = useState({
        mobile : '',
        password : ''
    })

    const [isLoading,setLoading] = useState(false);

    function submitHandleChange() {

        setLoading(true);

        var found = userData.find(user=>user.mobile==getUser.mobile);
      
        if(found != undefined) {

            setTimeout(() => {
                dispatch(logedIn(found));

                dispatch(setDeviceInfo(deviceData));

                setLoading(false); 

                navigation.replace('App');
            }, 1000);

        } else {

            setLoading(false);

            Alert.alert('please check your credentials');
        }
    }

    function emailHandleChange(value) {
     
        setUser({
            ...getUser,
            ['mobile']: value
        });
    }

    function passwordHandleChange(value) {
        setUser({
            ...getUser,
            ['password']: value
        });
    }

    return (
        <ScrollView>
            <View style={{...styles.container}}>
                <Header title={'MY ACCOUNT'} type = 'arrow-left' navigation={navigation} />

                <View style={{marginLeft : 20, marginTop : 10}}>
                    <Text style={styles.title}>Sign In</Text>
                </View>

                <View style={{alignItems : 'center', marginTop : 10}}>
                    <Text styles={styles.text1}>Please enter the email and password</Text>
                    <Text styles={styles.text1}>Register with your account</Text>
                </View>

                <View style={{marginTop:20}}>
                    <View>
                        <TextInput 
                            style = {styles.textInput1}
                            placeholder='mobile'
                            name='mobile'
                            keyboardType='number-pad'
                            onChangeText={emailHandleChange}
                        />
                        {/* (e)=>setUser({email:e.target.value}) */}
                    </View>
                    <View style={{flexDirection:'row',position:'relative'}}>
                        <View style = {{position:'absolute'}}>
                            <Icon 
                                type='material'
                                name= 'lock'
                                color={COLORS.gray3}
                                size = {28}
                                style = {{paddingLeft:30,paddingTop:10}}
                            />
                        </View>
                        
                        <TextInput 
                            style = {styles.textInput2}
                            placeholder='Password'
                            name='password'
                            onChangeText={passwordHandleChange}
                        />
                    </View>
                </View>

                <View style={{marginHorizontal:20}}>
                    <Button 
                        title='SIGN IN'
                        buttonStyle = {styles.loginBtn}
                        titleStyle = {styles.btnTitle}
                        onPress= {submitHandleChange}
                    />
                    {
                        isLoading ? 
                            <ActivityIndicator size="large" color="#282534"  />
                        : null
                    }
                </View>

                <View style={{marginVertical:15,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textDecorationLine:'underline'}}>Forgot Password ?</Text>
                </View>

                <View style={{marginVertical:20,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'black'}}>OR</Text>
                </View>

                <View style={{marginHorizontal:20}}>
                    
                    <SocialIcon 
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                        style = {styles.socialIcon}
                    />
                </View>

                <View style={{marginHorizontal:20}}>
                    
                    <SocialIcon 
                        title='Sign In With Facebook'
                        button
                        type='google'
                        style = {styles.socialIcon}
                    />
                </View>

                <View style={{marginHorizontal:30,marginVertical:10}}>
                    
                    <Text style={{fontWeight:'500'}}>New On XpressFood ?</Text>
                </View>

                <View style={{marginHorizontal:10,marginBottom:20,justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Button 
                        title='Create an account'
                        buttonStyle = {styles.createAcBtn}
                        titleStyle = {styles.createAcBtnTitle}
                    />
                </View>

                
            </View>

        </ScrollView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    title : {
        color : COLORS.buttons,
        fontSize : 20,
        fontWeight : 'bold'
    },
    text1 : { 
        color : COLORS.gray3,
        fontSize: 16,
    },
    textInput1 : { 
        borderWidth : 1,
        borderColor : COLORS.gray3,
        marginHorizontal : 20,
        borderRadius : 12,
        marginBottom : 20,
        paddingLeft : 20
    },
    textInput2 : { 
        flex: 1,
        borderWidth : 1,
        borderColor : COLORS.gray3,
        marginHorizontal : 20,
        borderRadius : 12,
        marginBottom : 20,
        paddingLeft : 45,
    },
    loginBtn : {
        backgroundColor : '#ff8c52',
        alignContent : 'center',
        justifyContent : 'center',
        borderRadius : 12,
        borderWidth : 1,
        borderColor : '#ff8c52',
        height : 50,
        width : '100%',
    },
    btnTitle : {
        color : COLORS.white,
        fontSize : 20,
        fontWeight : 'bold',
        alignItems : 'center',
        justifyContent : 'center',
    },
    createAcBtn : {
        backgroundColor : COLORS.white,
        alignContent : 'center',
        justifyContent : 'center',
        borderRadius : 12,
        borderWidth : 1,
        borderColor : '#ff8c52',
        height : 50,
        width : '50%',
    },
    createAcBtnTitle : {
        color : '#ff8c52',
        fontSize : 15,
        fontWeight : 'bold',
        alignItems : 'center',
        justifyContent : 'center',
    },
    socialIcon : {
        height : 50,
        borderRadius : 12,
    }
});