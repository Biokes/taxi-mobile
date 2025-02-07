import HomeScreen from '@/screens/homescreen'
import { ScrollView, SafeAreaView} from 'react-native';
export default function Index() {
  return (
    <ScrollView>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </ScrollView>
  );
}
