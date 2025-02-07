import { ScrollView } from "react-native-gesture-handler";
import Navbar from "@/components/reuseable/navbar";
import Hero from "@/components/home/hero";

export default function HomeScreen() { 
    return (
        <ScrollView>
            <Navbar />
            <Hero/>
        </ScrollView>
    )
}