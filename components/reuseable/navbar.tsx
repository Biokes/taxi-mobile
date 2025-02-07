import { View, TouchableOpacity,Text,StyleSheet} from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
// import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize:15
    },
    navbar: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: '#0076CB',
        flex: 1, flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingInline: 7,
        paddingBlock: 10
    }
})
export default function Navbar() { 
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={{flexDirection:'row'}}>
                <Text style={styles.text}>T</Text>
                <Fontisto name="taxi" size={20} color="white" />
                <Text style={styles.text}>XI</Text>
            </TouchableOpacity>
            {/* <Ionicons name="menu-sharp" size={20} color="black" /> */}
        </View>
    )
}