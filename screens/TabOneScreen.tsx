import React, { Fragment, useState } from 'react';
import { Alert, Dimensions, Image, ImageBackground, ScrollView, StyleSheet,   TouchableOpacity } from 'react-native';
import { Button, CheckBox, colors,  } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from '../components/ViewWithLoading';
import * as yup from "yup";
import Svg, { Path, Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

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
      
<ScrollView style={{ flexGrow:1}}> 

<View style={{ padding:0, height:"100%", backgroundColor:"white", flex:1}}>
  <View> 
<Svg width= "100%" height="770" id="svg" viewBox="0 0 1400 1100" preserveAspectRatio="none" 
style={{ 
  position: "absolute",
  top: 0,
  left: 0,
  height: 500,
  width: "100%"}}
  >
   <LinearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
    <Stop offset="5%" stopColor= "#32ded4ff" />
    <Stop offset="95%" stopColor="#002bdcff"  />
   </LinearGradient>
   <Path d="M 0,600 C 0,600 0,300 0,300 C 117.59999999999997,310.8 235.19999999999993,321.6 412,303 C 588.8000000000001,284.4 824.8,236.4 1006,231 C 1187.2,225.6 1313.6,262.8 1440,300 C 1440,300 1440,600 1440,600 Z" fill="url(#gradient)" transform="rotate(-180 720 300)" ></Path>
  </Svg>  
</View>
  <View style={styles.container3}>
                      <Text style={styles.registercontainer}>
   Log In
    </Text>
                      </View>
                      
        <View style={{marginHorizontal:25, marginVertical: 8, backgroundColor:'#0000', padding:0, marginTop:335, borderRadius:30}}>
        <TextInput
      label="Email Address/Username"
      value={email}
      mode={'outlined'}
 
      activeOutlineColor={"blue"}

     autoComplete={false}
     style={{
     marginVertical:0,
       padding:0,
       backgroundColor:'white',
       height:58

     }}
     theme={{roundness:25}}
     onChangeText={(text:string) =>{setEmail(text);}}
/>
        </View>

        <View style={{marginHorizontal:25, backgroundColor:'#0000',  marginVertical: 4, padding:0,}}>
          <TextInput
      label="Password"
      value={password}
      mode={"outlined"}
     autoComplete={false}
     style={{
      padding:0,
      backgroundColor:'white',
      height:54,

      
    }}
    theme={{roundness:25}}
    onChangeText={(text:string) =>{setPassword(text);}}
    secureTextEntry={visble}
    
    right={<TextInput.Icon name={visble ? "eye" : "eye-off"} 
    onPress={() => {setvisible(!visble);}}
    />}
     
/>
        </View>

        <View style={{
            backgroundColor:'#FFFFFF' ,
            marginHorizontal:28,
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
                  marginTop:55, 
                  marginHorizontal:25,
                  borderRadius:10,  
                  padding:6, 
                  borderWidth: 1, 
                  borderColor:'black', 
                  backgroundColor:'#002bdcff',
                  height:50
                }}
               titleStyle={{
                fontSize: 18,
                color: '#FFFFFF',
                fontFamily: 'poppins-regular',
                textAlign: 'center',
            fontWeight:"bold"
               }}
               onPress={handlelogin}
              
              />
     
          </View>
          
          <View style={styles.orcontainer}>
                                <View style={styles.line} />
                                  <View>
                                <Text style={{width: 50, textAlign: 'center'}}>or</Text>
                                </View>
                                <View style={styles.line} />
                                </View> 

                                <View style={styles.otherregistration}>
                                  <View style={styles.signin}>
                                  <Image source={{ uri: 'https://logowik.com/content/uploads/images/985_google_g_icon.jpg' }}
                                  style={{
                                    resizeMode:"cover",
                                    height:35,
                                    width:35,
                                    backgroundColor:"transparent",
                                    alignSelf:"center"
                                  }}
                                  >
                                  </Image>
                                  <Text style={{alignSelf:"center", color:"black", fontWeight:"bold", fontSize:15}}>Google</Text>
                                  </View>

                                  <View style={styles.signin}>
                                  <Image source={{ uri: 'https://i.pinimg.com/564x/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7--facebook-icon-negative-feedback.jpg' }}
                                  style={{
                                    resizeMode:"contain",
                                    height:35,
                                    width:35,
                                    backgroundColor:"transparent",
                                    alignSelf:"center"
                                  }}
                                  >
                                  </Image>
                                  <Text style={{alignSelf:"center", color:"black", fontWeight:"bold", fontSize:15}}>Facebook</Text>
                                  </View>
                              
                                </View>

                                <View style={{
            backgroundColor:'#FFFFFF' ,
            marginHorizontal:15,
            flexDirection:'row', 
            justifyContent:'center',
            marginTop:55,
             
            
            }}>
          <View style={{backgroundColor:'#FFFFFF', marginBottom:30}}>
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

        </ScrollView>
  );
      }
              
const styles=StyleSheet.create({
  container1:{
    alignItems:'center',
  height:800
  },
 
  container2:{
    flex:1, height:"auto", 
    width:"100%", 
    borderRadius:30, 
    position:'absolute', 
    marginTop:210,
    backgroundColor:'white',

  },

  logo:{
  width:"100%",
  position:"relative",
  height:400,
  resizeMode:"cover"
  },

  custominputext1:{
    backgroundColor:"white",
    width:140, 
    justifyContent:"center", 
    padding:0, 
    alignSelf:'center'
  },

  firstlastnamecontainer:{
    backgroundColor:"white",
    width:"80%", 
    justifyContent:"space-between", 
    marginTop:35, 
    padding:0, 
    alignSelf:'center',
    flexDirection:"row",
  },

  custominputext:{
    backgroundColor:"white",
    width:"80%", 
    justifyContent:"center", 
    marginTop:15, 
    padding:0, 
    alignSelf:"center"
  },

  custominputext3:{
    backgroundColor:"white",
    width:"80%", 
    justifyContent:"center", 
    marginTop:20, 
    padding:0, 
    alignSelf:"center",
    marginBottom:30
  },

  registercontainer:{
    fontSize:50,
    color:"white", 
    fontWeight:'bold',
  },

  newaccountcontainer:{
color:'white',
fontSize:20,

  },

  container3:{
marginTop:130,
justifyContent:"center",
alignSelf:'flex-start',
marginHorizontal:25, 
backgroundColor:'transparent',
position:'absolute'
  },

  line:{
    flex: 1, 
    height: 1, 
    backgroundColor: 'black'
  },

  orcontainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    width:"80%", 
    justifyContent:"center", 
    alignSelf:'center',
    marginTop:20
  },

  otherregistration:{
    flexDirection:"row", 
    width:"75%", 
    alignSelf:"center",
    justifyContent:"space-between", 
    backgroundColor:"white", 
    padding:0, 
    marginTop:20
  },

  signin:{
    borderRadius:15, 
    borderColor:"#c4c4c4",
    borderWidth:1, 
    backgroundColor:"white", 
    flexDirection:"row", 
    height:50, 
    width:135, 
    justifyContent:"center",
  },

  textinputstyle:{
    backgroundColor:"white",
    width: "100%",
    alignSelf:'center',
    height:60
  }



});