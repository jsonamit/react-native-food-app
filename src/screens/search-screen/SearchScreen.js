import { 
    View, Text,
    FlatList,
    TouchableWithoutFeedback,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native'
import React from 'react';
import SearchComponent from '../../components/search/SearchComponent';
import {filterData2} from '../../assets/Data';
import { COLORS } from '../../constants';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {
  return (
    <View style={{flex:1,marginBottom:50}}>
        <SearchComponent />

        <View 
            style={{marginTop:20}}
        >
            <FlatList 
                style={{marginBottom:20}}
                data={filterData2}
                keyExtractor={item=>item.id}
                horizontal = {false}
                showsVerticalScrollIndicator= {false}
                ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
                numColumns ={2}
                renderItem={({item})=>(
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("SearchResultScreen",{item:item.name})
                        }}
                    >
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.image}
                                source={{uri:item.image}}
                            >
                                <View style={styles.textView}>
                                    <Text style={{color:COLORS.white}}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    imageView : {  
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
    },

    image :  {     
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10, 
    },
    
    listHeader : {  
        fontSize:16,
        color:COLORS.gray2,
        paddingBottom:10,
        fontWeight:'bold',
        marginLeft:12
    },

    textView : {  
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52, 52, 52,0.3)'
    },

})