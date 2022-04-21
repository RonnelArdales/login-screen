import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native-elements/dist/header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeScreen, } from '../screens/Home/Index';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { ProfileParamlist } from '../types';


const Stack = createNativeStackNavigator<ProfileParamlist>();

export default function ProfileNavigator() {
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
      <Stack.Screen name="Profile" component={ProfileScreen}  options={{headerTitleAlign:"center"}}/>
    </Stack.Navigator>
  );
}