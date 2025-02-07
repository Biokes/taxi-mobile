import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform, useColorScheme } from 'react-native';

export default function TabsLayout() { 
    const colorScheme = useColorScheme()
     return (
        <Tabs screenOptions={{tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,tabBarStyle: Platform.select({ios: {position: 'absolute',},default: {},}),}}>
             <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}/>
         </Tabs>
    )
}