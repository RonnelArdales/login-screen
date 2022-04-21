import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native-elements/dist/header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeScreen,} from '../screens/Home/Index';
import { HomeParamlist } from '../types';


const Stack = createNativeStackNavigator<HomeParamlist>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={({navigation}) => ({ 
      headerLeft:()=> (

        <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
        >
<Ionicons name='menu' size={30} color={"black"}></Ionicons>

        </TouchableOpacity>

      )
    })}>
      <Stack.Screen name="HOME" component={HomeScreen}  options={{headerTitleAlign:"center"}}/>
    </Stack.Navigator>
  );
}