import React, { useState } from 'react';
import { Alert, Dimensions, Image, ImageBackground, ScrollView, StyleSheet,   TouchableOpacity } from 'react-native';
import { Button, CheckBox,  } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from '../components/ViewWithLoading';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [visible, setvisible] = useState(true);
const [loading, setLoading]= useState(true);
const [check1, setCheck1] = useState(false);


 const handlelogin = () => {
    if(password === "" || repassword === " " || fname === "" || lname === "" ||  email === "" ){
      return Alert.alert("Error Login", 'Required field must be completed.' );
    }
    else
    if(password !== repassword) {
      return Alert.alert("Error Login", 'Password must be the same.' );
    } 
    return Alert.alert("Login Successfully", 'email: ${email}\npassword: ${password}' );
}


  setTimeout(() => {
    setLoading(false);
  }, 1000);

 

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>

<View style={ styles.container1}>
<ImageBackground
                    source={{ uri: 'https://i.pinimg.com/564x/5d/a0/a3/5da0a37951df9594ae0dd93eaff93ceb.jpg' }}
                    style={styles.logo }
                   >
  <Text style={styles.registercontainer}>
   Register
  </Text>
<View style={styles.container2}>
<Text style={{color:"white", textAlign:"center", fontSize:15, marginTop:10}}>
           Please Enter your Personal info
         </Text>

<View style={styles.custominputext}>
         
          <TextInput
       label={"First Name"}
      value={fname}
     autoComplete={false}
     style={styles.input}
    mode="flat"
    
    onChangeText={(text:string) =>{setFname(text);}}
    />
</View>
<View style={styles.custominputext}>
    <TextInput
  label={"Last Name"}
    value={lname}
   autoComplete={false}
  mode="flat"
   style={styles.input}
 
  onChangeText={(text:string) =>{setLname(text);}}

  />
    </View>
   <View style={styles.custominputext}>
   <TextInput
    label={"Email Address"}
    value={email}
   autoComplete={false}
   mode="flat"
   style={styles.input}

  onChangeText={(text:string) =>{setEmail(text);}}

  />
   </View>
   <View style={styles.custominputext}>
   <TextInput
    label={"Password"}
    value={password}
   autoComplete={true}
   mode="flat"
   style={styles.input}

  onChangeText={(text:string) =>{setPassword(text);}}
  secureTextEntry={visible}
  />
   </View>
   <View style={styles.custominputext}>
   <TextInput
    label={"Re-type Password"}
    value={repassword}
   autoComplete={false}
   mode="flat"
   style={styles.input}

  secureTextEntry={visible}
  onChangeText={(text:string) =>{setRepassword(text);}}
  />
   </View>


<View style={styles.registerbuttoncontainer}>
       <Button
                title="Register"
                buttonStyle={{
           height:"100%",
           borderColor:"white",
           borderWidth:1,
           borderRadius:10,
                }}

               titleStyle={{
                fontSize: 23,
                color: 'white',
                fontFamily: 'poppins-regular',
                textAlign: 'center',
                fontWeight:'bold'
              }}

               onPress={handlelogin}
              
              />
     
          </View>
</View>

</ImageBackground>

</View>
</ScrollView>
 
  );
              }
              
const styles=StyleSheet.create({
  container1:{
    alignItems:'center',
  },
 
  container2:{
    alignSelf:'center',
    flex:1,
    marginVertical:100,
    height: '70%',
    width: '92%',
    backgroundColor: 'transparent',
    opacity:.9,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'column',
    position:'absolute',
    marginTop:150
  },

  logo:{
  width:"100%",
  position:"relative",
  height:826,
  flex:1,
  resizeMode:"cover"
  },

  custominputext:{
    borderRadius: 10,
        height: 55,
        overflow: 'hidden',
        marginTop:25,
        width:"90%",
        alignSelf:"center"
  },

  input:{
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 57,
    overflow: 'hidden',
    backgroundColor: '#fff',
    width:"100%"
  },

  registerbuttoncontainer:{
    borderRadius: 10,
        height: 55,
        overflow: 'hidden',
        marginTop:38,
        width:"90%",
        alignSelf:"center"
  },

  registercontainer:{
    position:"absolute",  
    fontSize:35,
    color:"white", 
    marginTop:80, 
    justifyContent:"center", 
    alignSelf:"center", 
    padding:0
  }

});


  
