import { ScrollView } from "react-native-gesture-handler";
import Navbar from "@/components/reuseable/navbar";
import Hero from "@/components/home/hero";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() { 
    return (
        <SafeAreaView>
            <ScrollView>
                <Navbar/>
                <Hero/>
            </ScrollView>
        </SafeAreaView>
       
    )
}