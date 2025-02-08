import { View, TouchableOpacity,Text,StyleSheet} from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize:20
    },
    navbar: {
        position: 'fixed', 
        height: 40,
        backgroundColor: '#0076CB',
        flex: 1, flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingInline: 7,
        paddingBlock: 10,
        zIndex: 50,
        top: 0,
        left: 0,
        shadowRadius: 10,
        elevation: 5,
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 0.2,
    }
})
export default function Navbar() { 
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={{flexDirection:'row', flex:1}}>
                <Text style={styles.text}>T</Text>
                <Fontisto name="taxi" size={20} color="white" />
                <Text style={styles.text}>XI</Text>
            </TouchableOpacity>
        </View>
    )
}
// fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4