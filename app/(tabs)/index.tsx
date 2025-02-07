import HomeScreen from '@/screens/homescreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, SafeAreaView} from 'react-native';
export default function Index() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
    
  );
}
