import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native-elements/dist/header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeScreen,} from '../screens/Home/Index';
import AddTaskScreen from '../screens/Task/AddTaskScreen';
import EditTaskScreen from '../screens/Task/Edittask';
import TaskScreen from '../screens/Task/TaskScreen';
import { TaskParamlist } from '../types';


const Stack = createNativeStackNavigator<TaskParamlist>();

export default function TaskNavigator() {
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
      <Stack.Screen name="Task" component={TaskScreen}  options={{headerTitleAlign:"center"}}/>
      <Stack.Screen name="AddTask" component={AddTaskScreen}  options={{headerTitleAlign:"center"}}/>
      <Stack.Screen name="EditTask" component={EditTaskScreen}  options={{headerTitleAlign:"center"}}/>
    </Stack.Navigator>
  );
}