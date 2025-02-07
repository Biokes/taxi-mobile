import { View, Text, StyleSheet, Dimensions, TextInput,TouchableOpacity, Image} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react";
import { RegisterRequest } from '@/models/interfaces'


const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0076CB',
        width: width * 0.9,
        fontSize: 25,
        textAlign: 'center',
        padding: 15,
        color:'white'
    },
    partner: {
        fontSize: 15,
        color: 'white',
        textAlign:'center'
    },
    buttonText: {
        fontSize: 15,
        padding: 10,
        borderRadius: 15,
        backgroundColor:'black'
    },
    ride: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: 'white'
    },
    input: {
        color: 'black',
        borderRadius: 10,
        height: 20,
        padding: 7,

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
        <View>
            <View>
                <Text style={styles.header}>Earn Connect Contribute to Society.</Text>
                <Text style={styles.partner}>
                    Partner with us to drive your own livelihood and more.
                    Partner with us to drive your own livelihood and more.
                </Text>
            </View>
            <View>
                <View style={{flexDirection:'row', flex:1,backgroundColor:'#0076CB',gap:5}}>
                    <FontAwesome5 name="taxi" size={24} color="white" />
                    <Text>take a ride</Text>
                </View>
                <Text>Get member exclusive rewards</Text>
                <View>
                    <TextInput placeholder="Firstname" value={data.firstname} style={styles.input} onChangeText={(text) => setData({ ...data, firstname: text })} />
                    <TextInput placeholder="Lastname" value={data.lastname} style={styles.input} onChangeText={(text) => setData({ ...data, lastname: text })} />
                    <TextInput placeholder="Phone Number" placeholderTextColor="black" style={styles.input} onChangeText={(text) => setData({ ...data, phone: text })} 
                        keyboardType="phone-pad" autoCapitalize="none" autoComplete="email" textContentType="telephoneNumber" value={data.phone} />
                    <TextInput placeholder="Email address" placeholderTextColor="black" style={styles.input}
                        keyboardType="email-address" autoCapitalize="none" autoComplete="email" textContentType="emailAddress"
                        value={data.email} onChangeText={(text) => setData({ ...data, email: text })} />
                    <TouchableOpacity style={styles.buttonText}>
                        <Text style={styles.ride}>sign up to ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingBlock:20, backgroundColor:'#0076CB'}}>
                <Image source={{ uri: "https://cms.code4rest.com/wp118/wp-content/uploads/2024/09/about-01.jpg" }} style={{ height: 200,width:'100%'}} />
            </View>
        </View>
    )
}