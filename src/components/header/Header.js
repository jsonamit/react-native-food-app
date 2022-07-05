import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { PARAMETERS, COLORS, SIZES } from '../../constants';

const Header = ({ title, type, navigation }) => {
  return (
    <View style={styles.header}>
        <View style={{ marginLeft: 10 }}>
            <Icon 
                type='material-community'
                name= {type}
                color={COLORS.white}
                size = {28}
                onPress = {()=>{
                    navigation.goBack();
                }}
            />
        </View>
        <View>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor : COLORS.headerColor,
        flexDirection : 'row',
        height : PARAMETERS.headerHight,
        paddingTop:5
    },
    headerText : {
        color : COLORS.white,
        fontSize : 22,
        // fontWeight:'bold',
        marginLeft: 25,
    }
});