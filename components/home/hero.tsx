import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput,TouchableOpacity, Image, ImageBackground} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react";
import { RegisterRequest } from '@/models/interfaces'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0076CB',
        width: width * 0.9,
        fontSize: 35,
        textAlign: 'center',
        padding: 15,
        color:'white'
    },
    partner: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        padding:15
    },
    buttonText: {
        fontSize: 15,
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'black',
        marginBottom: 10,
        width:150
       
    },
    ride: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: 'white',
        textAlign: 'center',
        flex: 1,
        justifyContent:'center'
    },
    input: {
        color: 'black',
        height: 40,
        padding: 7,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor:'#0076cb'
    },
    iconHeaderText: {
        fontSize: 20,
        textTransform:'capitalize'
    },
    pack: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center'
    },
    iconSmallerText: {
        fontSize:15
    }
})
export default function Hero() { 
    const [data, setData] = useState<RegisterRequest>({
        firstname: '',
        lastname: '',
        email: '',
        phone:''
    })

    return (
        <ScrollView>
            <ImageBackground source={{ uri: "https://res.cloudinary.com/depwujqik/image/upload/v1717091900/samples/cup-on-a-table.jpg" }} blurRadius={50}>
                <ScrollView>
                    <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center', flex:1, paddingInline:20,paddingBlock:30}}>
                        <Text style={styles.header}>Earn, Connect, Contribute to Society.</Text>
                        <Text style={styles.partner}>
                            Partner with us to drive your own livelihood and more.
                            Partner with us to drive your own livelihood and more.
                        </Text>
                    </View>
                    <View style={{padding:20}}>
                        <View style={{ flexDirection: 'row',justifyContent:'center' ,flex: 1, backgroundColor: '#0076CB', gap: 5, alignItems: 'center', paddingBlock: 10}}>
                            <FontAwesome5 name="taxi" size={24} color="white" />
                            <Text style={{color:'white', textTransform:'capitalize',fontSize:25}}>take a ride</Text>
                        </View>
                        <View style={{backgroundColor:'white', paddingInline:10}}>
                            <Text style={{flex:1,textAlign:'center',padding:4,fontSize:20, color:'#0076cb'}}>Get member exclusive rewards</Text>
                            <View style={{paddingInline:10, gap:3}}>
                                <TextInput placeholder="Firstname" value={data.firstname} style={styles.input} onChangeText={(text) => setData({ ...data, firstname: text })} />
                                <TextInput placeholder="Lastname" value={data.lastname} style={styles.input} onChangeText={(text) => setData({ ...data, lastname: text })} />
                                <TextInput placeholder="Phone Number"  style={styles.input} onChangeText={(text) => setData({ ...data, phone: text })} 
                                    keyboardType="phone-pad" autoCapitalize="none" autoComplete="email" textContentType="telephoneNumber" value={data.phone} />
                                <TextInput placeholder="Email address"  style={styles.input}
                                    keyboardType="email-address" autoCapitalize="none" autoComplete="email" textContentType="emailAddress"
                                    value={data.email} onChangeText={(text) => setData({ ...data, email: text })} />
                                <View style={{justifyContent:'center', alignItems:'center',flex:1, paddingBlock:10}}>
                                    <TouchableOpacity style={styles.buttonText}>
                                        <Text style={styles.ride}>sign up to ride</Text>
                                    </TouchableOpacity>
                                </View>
                            
                            </View>
                        </View>
                    </View>
                    <View style={{paddingBlock:40, backgroundColor:'#0076CB'}}>
                        <Image source={{ uri: "https://cms.code4rest.com/wp118/wp-content/uploads/2024/09/about-01.jpg" }} style={{ height: 200,width:'100%'}} />
                    </View>
                </ScrollView>
            </ImageBackground>
            <View style={{backgroundColor:'#F0F8FF',alignItems:'center',flex:1,justifyContent:'center',gap:10, paddingBlock:15}}>
                <Text style={{ color: '#0076cb', textTransform: 'capitalize', fontSize: 20 }}>your taxi to freedom</Text>
                <View style={{ gap:5,alignItems:'center',flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center', fontSize:15,paddingInline:width*0.09, fontWeight:'100'}}>
                        It is a long established fact that a reader distracted by the
                        readable content of a page when looking its layout.
                        The point of using is that it has a
                    </Text>
                    <View style={{flex:1,flexDirection:'row', gap:7,justifyContent:'center'}}>
                        <FontAwesome name="angle-double-right" size={17} color="black" />
                        <Text style={{fontSize:15}}>Every turn, a new tale</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row', gap:7,justifyContent:'center'}}>
                        <FontAwesome name="angle-double-right" size={17} color="black" />
                        <Text style={{fontSize:15}}>Urban adventures start here</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row', gap:7,justifyContent:'center'}}>
                        <FontAwesome name="angle-double-right" size={17} color="black" />
                        <Text style={{fontSize:15}}>Every fare tells a story</Text>
                    </View>
                    <TouchableOpacity style={[styles.buttonText, {marginTop:15}]}>
                        <Text style={styles.ride}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: '#F0F8FF', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, paddingTop: 10 }}>
                <View style={{flex:1, flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={20} color="#0076cb" />
                    <Text style={{ fontSize: 20, color:'black' }}>What we offer</Text>
                </View>
               
                <Text style={{ color: 'black', fontSize: 30, textTransform: 'capitalize' }}>welcome to us</Text>
                
                <View style={styles.pack}>
                    <FontAwesome6 name="map-location" size={35} color="#0076cb"  />
                    <Text style={styles.iconHeaderText}>Address Pickup</Text>
                    <Text style={styles.iconSmallerText}>It is a long established fact that is by the readable content of</Text>
                </View>
                <View style={styles.pack}>
                    <Text style={styles.iconHeaderText}>Air transfer</Text>
                    <Text style={styles.iconSmallerText}>It is a long established fact that is by the readable content of</Text>
                    <Ionicons name="airplane-outline" size={35} color="#0076cb" />
                </View>
                
                <View style={styles.pack}>
                    <Text style={styles.iconHeaderText}>Long distance</Text>
                    <Text>It is a long established fact that is by the readable content of</Text>
                    <Entypo name="location" size={35} color="#0076cb" />
                </View>
                
                <View style={styles.pack}>
                    <Text style={styles.iconHeaderText}>Taxi tours</Text>
                    <Text  style={styles.iconSmallerText}>It is a long established fact that is by the readable content of</Text>
                    <MaterialCommunityIcons name="map-marker-distance" size={35} color="#0076cb" />
                </View>
                
            </View>
      </ScrollView>
    )
}