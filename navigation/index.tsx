/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome, Ionicons } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import TabOneScreen from '../screens/TabOneScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import HomeNavigator from './HomeNavigator';
 import LinkingConfiguration from './LinkingConfiguration';
import ProfileNavigator from './ProfileNavigator';
import TaskNavigator from './TaskNavigator';
import { DrawerContent } from '../screens/DrawerContent';
import SettingNavigator from './SettingNavigator';
import HomeScreen from '../screens/Home/HomeScreen';


 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */

  // const Stack = createNativeStackNavigator<RootStackParamList>()
 
// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//   <Stack.Screen name="home" component={HomeNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }




function RootNavigator() {

const navigation=useNavigation();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();
return (


<Drawer.Navigator useLegacyImplementation 
  screenOptions={{
    headerShown:false,
    drawerLabelStyle: {marginLeft:-18, fontSize:17},
    drawerActiveBackgroundColor:'#002bdcff',
    drawerInactiveTintColor:'#333',
    drawerActiveTintColor:'#fff'

    }} 
    drawerContent={(props) => <DrawerContent {...props} /> }
    >

<Drawer.Screen 
    name="LoginScreen" 
    component={TabOneScreen}
    options={{
      drawerItemStyle:{display:'none'},
      swipeEnabled:false,
    drawerIcon:({color}) => (
      <Ionicons name="home-outline" size={22} color={color}/>
    )
    }}
    />

    <Drawer.Screen 
    name="HomeDrawer" 
    component={HomeNavigator}
    options={{title:"Home",
    drawerIcon:({color}) => (
      <Ionicons name="home-outline" size={22} color={color}/>
    )
    }}
    />

    <Drawer.Screen 
      name="ProfileDrawer" 
      component={ProfileNavigator}
      options={{title:"Profile",
      drawerIcon:({color}) => (
        <Ionicons name="person-outline" size={22} color={color}/>
      )
      }}
      />

      <Drawer.Screen 
      name="Taskdrawer" 
      component={TaskNavigator}
      options={{title:"Task",
      drawerIcon:({color}) => (
        <Ionicons name="document-text-outline" size={22} color={color}/>
      )
      }}
      />

<Drawer.Screen 
    name="SettingDrawer" 
    component={SettingNavigator}
    options={{title:"Setting",
    drawerIcon:({color}) => (
      <Ionicons name="settings-outline" size={22} color={color}/>
    )
    }}
    />
  </Drawer.Navigator>


  );
}

 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
         headerShown: false
       }}>
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
           title: 'Tab One',
           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Modal')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
               <FontAwesome
                 name="info-circle"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginRight: 15 }}
               />
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Tab Two',
           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name'];
   color: string;
 }) {
   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
 }