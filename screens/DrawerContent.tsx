import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import{DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { Props } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useNavigation } from "@react-navigation/native";

export function DrawerContent(props:any){
const navigation = useNavigation();

return(

<View   style={{flex:1 }}>
<ImageBackground source={{uri: 'https://scontent.fmnl11-1.fna.fbcdn.net/v/t1.15752-9/275616101_486852396320819_6296659550059139399_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeE5VpzN_dJYlz_NE238Aw220kxN8jOpC2XSTE3yM6kLZUOqCf_rNtjNzt6WxYFhx8SIzvU67fTKWozdkPPfMyH5&_nc_ohc=gCpqFHoa97IAX_AYtsr&_nc_ht=scontent.fmnl11-1.fna&oh=03_AVIunjAnAA4DahEDeYQvUx6jxVPJhKoeXsO2iQlYQKEBnQ&oe=6266B313'}}
style={{padding:10,height:200, marginTop:0}}>

<View style={{justifyContent:"flex-end", marginTop:70}}>
            <Image source={require('../assets/images/pngprofile.png')}
            style={{height:65, width:65, marginBottom:10}}
            />
<Text style={{color:"white", fontSize:18,}}>
    Ronnel Ardales
</Text>
<Text style={{color:"#fff", fontSize:12}}>
    ronnelardales2192@gmail.com
</Text>
</View>
</ImageBackground>
<DrawerContentScrollView contentContainerStyle={{backgroundColor:"white", marginTop:-28}}>
<DrawerItemList {...props} />
</DrawerContentScrollView>
    <View style={{padding:20, borderTopWidth:1, borderTopColor:"gray", flexDirection:"row"}}>
        <TouchableOpacity style={{flexDirection:"row"}} onPress={()  => {
    navigation.navigate('LoginScreen')}
}>
            
    <Ionicons name="log-out-outline" size={24} color={"black"} style={{marginTop:2}}/>
        <Text style={{fontSize:20, marginLeft:5}}>
            Log Out
        </Text>
        </TouchableOpacity>
    </View>
   
</View>
);
}


// <View>
// <View
//   style={{
//     backgroundColor: '#f50057',
//     height: 140,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }}
// >
    
//   <Text style={{ color: 'white', fontSize: 30 }}>
//     Header
//   </Text>
// </View>

// </View>