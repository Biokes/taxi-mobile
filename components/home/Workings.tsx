import { View, ImageBackground, FlatList,Text, StyleSheet, Image, Dimensions,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Animated,{ FadeInDown } from "react-native-reanimated";


const width= Dimensions.get("screen").width
const styles = StyleSheet.create({
    iconHeaderText: {
        fontSize: 20,
        textTransform:'capitalize'
    },
    slider: {
        width:'95%'
    },
    cardContainer: {
        width: 400,
        height: 200,
        borderRadius:10,
        backgroundColor:'#0076cb'
    },
    card: {
        width: 380,
        flex: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center'
    },
    BigText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#ffffff',
        textTransform:'capitalize'
    },
    smallText: {
        fontSize: 13,
        fontWeight: "medium",
        color: '#ffffff',
    },
    mediumText: {
        fontSize: 15,
        fontWeight: 'medium',
        color: '#ffffff'
    },
})
const testimonials = [
    {
        image: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg',
        name: 'Robert hall',
        occupation: 'Driver',
        text:'there are many variations of passengers available, but the majority suffered alteration ins some form'
    },
    {
        image: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg',
        name: 'Laurel jarvis',
        occupation: 'Driver',
        text:'there are many variations of passengers available, but the majority suffered alteration ins some form'
    },
    {
        image: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg',
        name: 'emily johnson',
        occupation: 'Driver',
        text:'there are many variations of passengers available, but the majority suffered alteration ins some form'
    }
]
const info = [
    {
        image: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg',
        date: '',
        text:''
    },
    {
        image: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg',
        date: '',
        text:''
    },
    {
        image: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg',
        date: '',
        text:''
    },
]
export default function Workings() {
    return (
        <ScrollView>
            <ImageBackground source={{ uri: '' }} blurRadius={30} >
                <View style={{justifyContent:'center', alignItems:'center', flex:1, paddingBlock:20}}>
                    <View style={{ flex:1,justifyContent:'center', alignItems:'center'}}>
                <       FontAwesome6 name="map-location" size={20} color="#0076cb" />
                        <Text style={{fontSize:15}}>our features</Text>
                    </View>
                    <Text style={[styles.iconHeaderText, { paddingBlock: 15 }]}>How it works</Text>
                    {/* <FlatList></FlatList> */}
                    <View>
                        <Text style={{ fontSize: 18 }}>Fast booking</Text>
                        <Text style={{paddingInline:20,textAlign:"center"}}>It is a long established fact that a will distracted by the readable content a when looking .</Text>
                    </View>
                    {/* <FlatList></FlatList>  the flat list ends here*/}
                    <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
                        <Image source={{ uri: 'https://cms.code4rest.com/wp118/wp-content/uploads/2024/10/app-01.jpg' }} style={{width:width*0.8}} />
                    </View>
                     {/* <FlatList></FlatList> */}
                     <View>
                        <Text style={{ fontSize: 18 }}>GPS searching</Text>
                        <Text style={{paddingInline:20,textAlign:"center"}}>It is a long established fact that a will distracted by the readable content a when looking .</Text>
                    </View>
                    {/* <FlatList></FlatList>  the flat list ends here*/}
                </View>
                <View style={{ backgroundColor: '#F0F8FF', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, paddingBlock: 10 }}>
                    <View>
                        <View style={{ flex:1,justifyContent:'center', alignItems:'center'}}>
                            <FontAwesome6 name="map-location" size={20} color="#0076cb" />
                            <Text style={{fontSize:15}}>our features</Text>
                        </View>
                        <Text style={[styles.iconHeaderText, { paddingBlock: 15 }]}>Client say</Text>

                        <Animated.FlatList data={testimonials} style={styles.slider} entering={FadeInDown.delay(300).duration(100).springify()}
                            horizontal showsHorizontalScrollIndicator={false} renderItem={({item, index}) => (
                            <Animated.View  key={index} entering={FadeInDown.delay(400).duration(100).springify()} style={styles.cardContainer}>
                                <Image style={styles.card} source={{uri:item.image}} resizeMode={"cover"} />
                                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center', flex:1,gap:3}}>
                                    <Text style={styles.BigText}>{item.name}</Text>
                                    <Text style={styles.smallText}>{item.text}</Text>
                                    <Text style={styles.smallText}>{item.occupation}</Text>
                                </View>
                            </Animated.View>
                            )} />
                    </View>

                    <View>
                        <View style={{ flex:1,justifyContent:'center', alignItems:'center'}}>
                            <FontAwesome6 name="map-location" size={20} color="#0076cb" />
                            <Text style={{fontSize:15}}>our blog</Text>
                        </View>
                        <Text style={[styles.iconHeaderText, { paddingBlock: 15 }]}>News and article</Text>
                        <View style={{paddingBlock:10, gap:10}}>
                            <Image source={{ uri: "https://cms.code4rest.com/wp118/wp-content/uploads/2024/09/about-01.jpg" }} style={{ height: 200, width: '100%' }} />
                        </View>

                        <View>

                            <Animated.FlatList data={info} showsVerticalScrollIndicator={false} entering={FadeInDown.delay(300).duration(100).springify()}
                                renderItem={({item, index}) => (
                                    <View key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 3 }}>
                                        <Image source={{uri:item.image}}/>    
                                        <Text style={styles.BigText}>{item.date}</Text>
                                        <Text style={styles.smallText}>{item.text}</Text>
                                    </View>
                                )
                                }
                            />
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}