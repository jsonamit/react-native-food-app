import { 
    View, Text, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,FlatList, 
    Pressable,Image,
    Dimensions
} from 'react-native'
import React,{useState} from 'react'
import { Icon,withBadge } from 'react-native-elements';
import { PARAMETERS, COLORS, SIZES } from '../../constants';
import { filterData,restaurantsData } from '../../assets/Data';
import FoodCards from '../../components/cards/food/FoodCards';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {

    const [delivery,setDelivery] = useState(true);
    const [indexCheck,setIndexCheck] = useState("0");
    const BadgeIcon = withBadge(0)(Icon);

  return (
      <View>

        <View style={styles.header}>
            <View style={{ marginLeft: 10,justifyContent:'center',alignItems:'center' }}>
                <Icon 
                    type='material-community'
                    name= 'menu'
                    color={COLORS.white}
                    size = {28}
                    onPress = {()=>{
                        navigation.toggleDrawer();
                    }}
                />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.headerText}>Home</Text>
            </View> 

            <View style={{justifyContent:'center',alignItems:'center',marginRight:10}}>
                <BadgeIcon 
                    type='material-community'
                    name= 'cart'
                    color={COLORS.white}
                    size = {30}
                />
            </View>
        </View>

        <ScrollView
            stickyHeaderIndices={[0]}
            showsHorizontalScrollIndicator={true}
        >
            <View style={{backgroundColor:COLORS.white,paddingBottom:10}}>
                <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity  onPress= {()=>{setDelivery(true)}}>
                        <View style={{...styles.delivery,backgroundColor: delivery ? COLORS.buttons : COLORS.gray4}}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress= {()=>{setDelivery(false)}}>
                        <View style={{...styles.delivery,backgroundColor: delivery ? COLORS.gray4 : COLORS.buttons}}>
                            <Text 
                                style={styles.deliveryText}
                                onPress={()=>{
                                    navigation.navigate('MapScreen');
                                }}
                            >Pickup</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.filter}>
                <View style={{flexDirection:'row',backgroundColor:COLORS.gray5,borderRadius:50,paddingVertical:5,paddingHorizontal:20}}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:1}}>
                        <Icon 
                            type='material-community'
                            name='map-marker'
                            color={COLORS.gray1}
                            size = {24}
                        />
                        <Text>267 New Delhi</Text>
                    </View>
                    <View style={styles.clockView}>
                        <Icon 
                            type='material-community'
                            name='clock'
                            color={COLORS.gray1}
                            size = {24}
                        />
                        <Text style={{marginLeft:5}}>Now</Text>
                    </View>
                </View>
                <View>
                    <Icon 
                        type='material-community'
                        name='tune'
                        color={COLORS.gray1}
                        size = {24}
                    />
                </View>
            </View>
            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Categordddies</Text>
            </View>

            <View>
                <FlatList 
                    data = {filterData}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor = {(item)=>item.id}
                    extraData = {indexCheck}
                    renderItem = {({item,index})=>(
                        <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View style={indexCheck==item.id ? {...styles.smallCardSelected } : {...styles.smallCard}}>
                                <Image 
                                    style = {{height:60,width:60,borderRadius:30}}
                                    source = {item.image}
                                />
                                <View>
                                    <Text styles={indexCheck==item.id ? {...styles.itemTextWhite } : {...styles.itemTextWhite}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>

            <View style={{...styles.categoryView,marginVertical:15}}>
                <Text style={styles.categoryText}>Free Delivery Now</Text>
            </View>

            <View>
                <FlatList 
                    style = {{marginBottom : 10,marginTop : 10}}
                    horizontal = {true}
                    data = {restaurantsData}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style={{marginRight:5}}>
                            <FoodCards 
                                screenWidth={SCREEN_WIDTH*0.8}
                                images = {item.images}
                                restaurantName = {item.restaurantName}
                                farAway = {item.farAway}
                                businessAddress = {item.businessAddress}
                                averageReview = {item.numberOfReview}
                            />
                        </View>
                    )}
                />
            </View>

            <View style={{...styles.categoryView,marginVertical:15}}>
                <Text style={styles.categoryText}>Promations Avilable</Text>
            </View>

            <View>
                <FlatList 
                    style = {{marginBottom : 10,marginTop : 10}}
                    horizontal = {true}
                    data = {restaurantsData}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style={{marginRight:5}}>
                            <FoodCards 
                                screenWidth={SCREEN_WIDTH*0.8}
                                images = {item.images}
                                restaurantName = {item.restaurantName}
                                farAway = {item.farAway}
                                businessAddress = {item.businessAddress}
                                averageReview = {item.numberOfReview}
                            />
                        </View>
                    )}
                />
            </View>

            <View style={{...styles.categoryView,marginVertical:15}}>
                <Text style={styles.categoryText}>Restaurants in your area</Text>
            </View>

            <View style={{width : SCREEN_WIDTH,paddingTop:10}}>
                    {
                        restaurantsData.map((item)=>(
                            <View key={item.id} style={{paddingBottom:10}}>
                                <FoodCards 
                                    screenWidth={SCREEN_WIDTH*0.95}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.numberOfReview}
                                />
                            </View>
                        ))
                    }
            </View>
            
        </ScrollView>

        {
            delivery && 
            <View style={styles.floatButton}>
                <TouchableOpacity
                    onPress={()=>{
                        setDelivery(false);
                        navigation.navigate('MapScreen');
                    }}
                >
                    <Icon 
                        name="place"
                        type='material'
                        size={28}
                        color={COLORS.buttons}
                        style={{paddingTop:5}}
                    />
                    <Text style={{color: COLORS.gray2}}>Map</Text>
                </TouchableOpacity>
            </View>
        }
        
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor : COLORS.headerColor,
        flexDirection : 'row',
        height : PARAMETERS.headerHight,
        paddingTop:5,
        justifyContent:'space-between'
    },
    headerText : {
        color : COLORS.white,
        fontSize : 22,
    },
    deliveryText : {
       fontSize: 16
    },
    delivery : {
        borderRadius:15,
        paddingHorizontal:20,
        paddingVertical:5
    },
    filter : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:15
    },
    clockView : {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:5,
        borderRadius:50,
        backgroundColor:COLORS.white,
        paddingHorizontal:15
    },
    categoryText : {
        fontSize: 22,
        color : COLORS.gray1,
        fontWeight:'bold',
        paddingLeft:10
    },
    categoryView : {
        backgroundColor: COLORS.gray5,
    },
    smallCard : {
        borderRadius : 30,
        backgroundColor : COLORS.gray5,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
        width : 80,
        height : 100,
        margin : 10
    },
    smallCardSelected : {
        borderRadius : 30,
        backgroundColor : COLORS.buttons,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
        width : 80,
        height : 100,
        margin : 10
    },
    itemText : {
        fontSize :15,
        color : COLORS.gray1
    },
    itemTextWhite : {
        fontSize :15,
        color : COLORS.white
    },
    floatButton : {
        position : 'absolute',
        bottom :50,
        right : 10,
        backgroundColor : COLORS.white,
        width : 60,
        height : 60,
        borderRadius : 30,
        alignItems : 'center',
        elevation : 10,
    }
});
