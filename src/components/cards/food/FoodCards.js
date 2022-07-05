import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements';

import { COLORS } from '../../../constants';

export default function FoodCards({
    OnPressFoodCard,
    restaurantName,
    deliveryAvilable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}) {
  return (
    <TouchableOpacity>
         <View style={{...styles.cardView,width: screenWidth}}>
            <Image 
                style = {{...styles.image,width: screenWidth}}
                source = {{ uri: images}}
            />

            <View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',}}>
                    <View style={styles.distance}>
                        <Icon 
                            name = 'place'
                            type='material'
                            color={COLORS.gray4}
                            size = {18}
                            iconStyle= {{
                                marginTop : 3
                            }}
                        />
                        <Text style={styles.farAway}>{farAway}</Text>
                    </View>
                    <View style={{flex:9,flexDirection:'row'}}>
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>
                </View>
            </View>
        </View>
       
        <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={{color: COLORS.white,fontSize:13}}>{numberOfReview} reviews</Text>
        </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    cardView : {
        marginHorizontal: 9,
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5,
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        borderWidth : 1,
        borderColor : COLORS.gray4,
    },
    image : {
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5,
        height : 150,

    },
    restaurantName : {
        fontSize : 17,
        color : COLORS.gray1,
        marginTop: 5,
        marginLeft: 10,
        fontWeight:'bold'
    },
    distance : {
        flex : 4,
        flexDirection : 'row',
        borderRightColor : COLORS.gray4,
        paddingHorizontal : 5,
        borderRightWidth : 1,
    },
    farAway : {
        fontSize : 12,
        paddingTop : 5,
        color : COLORS.gray3
    },
    address : {
        fontSize :12,
        paddingTop : 5,
        color : COLORS.gray2,
        paddingHorizontal : 10,
    },
    review : {
        position : 'absolute',
        top : 0,
        right : 10,
        backgroundColor : 'rgb(52,52,52,0,3)',
        padding : 2,
        alignItems : 'center',
        justifyContent : 'center',
        borderTopRightRadius : 5,
        borderBottomLeftRadius : 12,
        fontWeight:'bold'
    },
    average : {
        color : COLORS.white,
        fontSize : 20,
        marginTop : 3,
        fontWeight:'bold'
    }
})