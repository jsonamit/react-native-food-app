import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { Icon,Button } from 'react-native-elements';
import { PARAMETERS, COLORS, SIZES } from '../../../constants';
import Swiper from 'react-native-swiper';

const SignupWelcome = ({ navigation })=> {
  return (
    <View style={{flex:1}}>

        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25,color:COLORS.buttons}}>DISCOVER RESTAURANTS</Text>
            <Text style={{fontSize:25,color:COLORS.buttons}}>IN YOUR AREA</Text>
        </View>

        <View style={{flex:4,justifyContent:'center'}}>
            <Swiper autoplay={true}>
                <View style={styles.slide1}>
                    <Image 
                        source={{uri:"https://arlingtonva.s3.amazonaws.com/wp-content/uploads/sites/25/2013/12/restaurant.jpeg"}}
                        style = {{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={styles.slide2}>
                    <Image 
                        source={{uri:"https://dmrqkbkq8el9i.cloudfront.net/Pictures/480xany/8/3/2/213832_restaurantmealwine_958571.jpg"}}
                        style = {{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={styles.slide3}>
                    <Image 
                        source={{uri:"https://www.jetsetter.com//uploads/sites/7/2018/04/TmT4XGRE-1380x690.jpeg"}}
                        style = {{width:'100%',height:'100%'}}
                    />
                </View>
            </Swiper>
        </View>

        <View style={{flex:4,justifyContent:'flex-end',marginHorizontal:15,marginVertical:30}}>
            <Button 
                title='SIGN IN'
                buttonStyle = {styles.loginBtn}
                titleStyle = {styles.btnTitle}
                onPress ={()=>{
                    navigation.replace('SignInScreen')
                }}
            />
             <Button 
                title='Create your account'
                buttonStyle = {styles.createAcBtn}
                titleStyle = {styles.createAcTitle}
            />
        </View>
    </View>
  )
}

export default SignupWelcome;

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
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
        backgroundColor : COLORS.width,
        alignContent : 'center',
        justifyContent : 'center',
        borderRadius : 12,
        borderWidth : 1,
        borderColor : '#ff8c52',
        height : 50,
        width : '100%',
        marginTop:20
    },
    createAcTitle : {
        color : '#000',
        fontSize : 20,
        fontWeight : 'bold',
        alignItems : 'center',
        justifyContent : 'center',
    },
})