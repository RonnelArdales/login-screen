import React, { useState } from 'react';
import { Alert, Dimensions, Image, ImageBackground, ScrollView, StyleSheet,   TouchableOpacity } from 'react-native';
import { Button, CheckBox,  } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from '../components/ViewWithLoading';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [visble, setvisible] = useState(true);
const [loading, setLoading]= useState(true);
const [check1, setCheck1] = useState(false);
  const credentials ={
email:"ronnelardales2192@gmail.com",
password:"12345",

  }

 const handlelogin = () => {
    if(credentials.email === email && credentials.password === password){
      return Alert.alert("Login Successfully", 'email: ${email}\npassword: ${password}' );
    }
  return Alert.alert("Error Login", 'email: ${email}\npassword: ${password}' );
}

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
<ViewWithLoading loading={loading}>
  
<View style={ styles.container1}>
      <View style={styles.container2}>
        <View style={styles.backgroundimagecontainer}>
          <ImageBackground
            source={{ uri: 'https://scontent.fmnl11-1.fna.fbcdn.net/v/t1.15752-9/274706547_657906742161449_6372853650668765658_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF1GtJCxW3DE8x1S9Rna_6xZDsPeMYnLnNkOw94xicuc_nkXTZROsSSv69rPKCaFy1owm-xa4r0-OX4jVsaKPa0&_nc_ohc=wAP7T2YoFvkAX8TSyyH&_nc_ht=scontent.fmnl11-1.fna&oh=03_AVLsRb8uESdOXRYfU_B7BtcBYnD8SEHsTTgb_RCE7YIUhQ&oe=624748DC' }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>

        <View style={styles.backgroundcontainer}>
            <View style={styles.imagecontainer}>
              <Image
                    source={{ uri: 'https://www.nicepng.com/png/full/138-1388174_login-account-icon.png'}}
                    style={{
                    height: '91%',
                    width: '100%',
                    resizeMode: 'center',
                    
                    }}
                   />
            </View>
       
        <View style={{marginHorizontal:11, marginVertical: 2, backgroundColor:'#0000', padding:0,}}>
        <TextInput
      label="Email Address"
      value={email}
     autoComplete={false}
     style={{
     marginVertical:0,
       padding:0,
       backgroundColor:'white'
     }}
     
     onChangeText={(text:string) =>{setEmail(text);}}

    
/>
        </View>
      
          <View style={{marginHorizontal:11, backgroundColor:'#0000'}}>
          <TextInput
      label="Password"
      value={password}
     autoComplete={false}
     style={{
      padding:0,
      backgroundColor:'white'
    }}
    
    onChangeText={(text:string) =>{setPassword(text);}}
    secureTextEntry={visble}
    right={<TextInput.Icon name={visble ? "eye" : "eye-off"} 
    onPress={() => {setvisible(!visble);}}
    />}
     
/>
        </View>
        <View style={{
            backgroundColor:'#FFFFFF' ,
            marginHorizontal:15,
            flexDirection:'row', 
            justifyContent:'space-between',
            marginTop:0,
            
            }}>
          <View style={{backgroundColor:'#FFFFFF',}}>
          <CheckBox
        center
        title="Remember me"
        checked={check1}
        onPress={() => setCheck1(!check1)}
        containerStyle={{marginLeft:0, padding:0,  backgroundColor:'#0000', borderWidth:0, marginTop:0}}
        
      />
       
          </View>
          <View style={{backgroundColor:'#FFFFFF', marginTop:3}}>
          <TouchableOpacity>
          <Text style={{  
             fontWeight:'bold',
                color:'blue',
                fontSize: 14,
                }}>
            Forgot Password?
            </Text>
          </TouchableOpacity>
          
          </View>
      
        </View>
        <View style={{backgroundColor:'white'}}>
       <Button
                title="Login"
                buttonStyle={{
                  marginTop:60, 
                  marginHorizontal:12,
                  borderRadius:10,  
                  padding:6, 
                  borderWidth: 1, 
                  borderColor:'black', 
                  backgroundColor:'#8338ec' 
                }}
               titleStyle={{
                fontSize: 15,
                color: '#FFFFFF',
                fontFamily: 'poppins-regular',
                textAlign: 'center',
            
               }}
               onPress={handlelogin}
              
              />
     
          </View>


      <View style={{
            backgroundColor:'#FFFFFF' ,
            marginHorizontal:15,
            flexDirection:'row', 
            justifyContent:'center',
            marginTop:5,
            marginBottom: 75,  
            
            }}>
          <View style={{backgroundColor:'#FFFFFF',}}>
          <Text style={{fontSize: 14, color:'black', marginRight:4}}>
              Not Registered?
          </Text>
          </View>
          <View style={{backgroundColor:'#FFFFFF'}}>
          <TouchableOpacity>
          <Text style={{  
             fontWeight:'bold',
                color:'blue',
                fontSize: 14,
                }}>
        Create an account
            </Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
</View>
      </View>
</ViewWithLoading>
  );
              }
              

const styles=StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center' 
  },
  container2:{
    height:'100%',
    width:'100%'
  },
  backgroundimagecontainer:{
    flex:1,
    borderRadius:0
  },
  backgroundcontainer:{
    alignSelf:'center',
    flex:1,
    marginVertical:100,
    height: '80%',
    width: '92%',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#42C2FF',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 
    flexDirection: 'column',
    position:'absolute'
  },
  imagecontainer:{
    flex: 1, 
    borderRadius: 0, 
    padding:0,
    backgroundColor:'#FFFFFF' 

  }, 
  emailcontainer:{
 


    backgroundColor:'#FFFFFF',
    marginHorizontal: 12, 
  },
  passwordcontainer:{
    backgroundColor:'#FFFFFF' ,
    padding:5, 
    borderBottomColor:'black',
    borderBottomWidth:1,
    flexDirection:'row', 
    justifyContent:'space-between',
    marginHorizontal:12,
    marginTop:15,
    paddingTop:4
  },
  textcontainer:{
    fontSize: 15,
    color: '#999B9B',
    fontFamily: 'poppins-regular',
    backgroundColor:'#FFFFFF',
  }
});

  
