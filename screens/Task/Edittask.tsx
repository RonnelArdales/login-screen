import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet, View, Text, Platform, Alert, Switch } from "react-native";
import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { getData, storeData } from "../../Database/StoreData";
import DateTimePicker from '@react-native-community/datetimepicker'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { TaskParamlist } from "../../types";

type Iroute = {
    "params": TaskParamlist ['EditTask'];
}

export default function AddTaskScreen(){

    const route = useRoute<RouteProp<Iroute, "params">>();
    const task =  route.params.task;
    const index = route.params.index
    const navigation = useNavigation();
    const [Title, setTitle]=useState<string>(task.Title);
    const [Description, setDescription]=useState<string>(task.Description);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);

    const [time, setTime] = useState(new Date());
    const [modetime, setModetime] = useState('time');
    const [isDisplayTime, SetShow] = useState(false);

    const [Textinputdate, SetDate] = useState<string>(task.Textinputdate)
    const [Textinputtime, SetTime] = useState<string>(task.Textinputtime) 
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

const handleconfirm = (event, selectedDate,) => {
      
            let Datetime = new Date().getDate()
            let Datemonth = new Date().getMonth() + 1
            let Dateyear = new Date().getFullYear()
            let fulldate = Datetime + '/' + Datemonth + '/' + Dateyear
          
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            let tempDate = new Date(currentDate);

                let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
               
                if ( fdate == fulldate){
                    SetDate(() => "Today")
                }else{
                    SetDate(fdate)
                }
            
}


const handletimeconfirm = (event, selectedTime ,) => {
    const currentTime = selectedTime || time;
    SetShow(Platform.OS === 'ios');
    setTime(currentTime);
    let tempTime = new Date(currentTime);
    let Htime = tempTime.getHours()  
    let Mtime =  tempTime.getMinutes()
    let prepend = Htime >= 12? "PM":"Am" 
    let ftime = Htime + ':' + Mtime + ' ' + prepend
    SetTime(ftime )
}



const Showdatepicker = () => {
  setShow(true)
  SetShow(false)
}

const Showtimepicker = () => {
    setShow(false)
    SetShow(true)

}
      
    const cleartextinput = () => {
        () => setDescription; setTitle(() => "")
    }
    
    const submit = async () => {
        if (!Title){
            Alert.alert("Error", "Please Input a task")
        }else{

            const addtask = await getData ('addtask');
            const data ={
                
                Title: Title,
                Description:Description,
                Textinputdate:Textinputdate,
                Textinputtime:Textinputtime
    
            }
            if (addtask){
         const json = JSON.parse(addtask)
            if (json){

               json[index] = {...data};
           
                const jsonvalue = JSON.stringify([...json]);
                await storeData('addtask', jsonvalue )
                navigation.goBack("Task")
    
            }
    
            }
        }

      
    }
    
    
    return(

    <View style={styles.container}>

        

<View  style={{flexDirection:"row", marginHorizontal:30, marginTop:25, }}>
<TextInput style={{marginVertical:5, width:"100%", backgroundColor:"transparent", marginBottom:0, marginTop:0}}
label={"Title"}
value={Title}
onChangeText= {setTitle}
autoComplete={false}
/>
</View> 
<View  style={{flexDirection:"row", marginHorizontal:30, marginVertical: 20,}}>
<TextInput style={{marginVertical:5, width:"100%", backgroundColor:"transparent", marginBottom:0, marginTop:0}}
label={"Description"}
value={Description}
onChangeText= {setDescription}
autoComplete={false}
></TextInput>
</View> 

<TouchableOpacity onPress={Showdatepicker} >
<View pointerEvents="none" style={{flexDirection:"row", marginHorizontal:30, marginRight:54, }}>
<TextInput style={{marginVertical:5, width:"100%", backgroundColor:"transparent", marginBottom:0, marginTop:0}}
label={"Date"}
value={Textinputdate}
onChangeText= {SetDate}
autoComplete={false}
>

</TextInput>
<Ionicons name="calendar" style={{alignSelf:"center"}} size={30} color={"blue"} > </Ionicons>
</View> 
</TouchableOpacity>

{isDisplayDate && (
                  <DateTimePicker
                  
                     testID="dateTimePicker"
                     value={date}
                     mode={"date"}
                     is24Hour={true}
                     display="default"
                     dayOfWeekFormat="{dayofweek.abbreviated(3)}"
                     onChange={handleconfirm}
                     
            />
         )}

<TouchableOpacity onPress={Showtimepicker}>
<View pointerEvents="none" style={{flexDirection:"row", marginHorizontal:30, marginRight:54, borderColor:"black", }}>
<TextInput style={{marginVertical:5, width:"100%", backgroundColor:"transparent", marginBottom:0, marginTop:0}}
label={"time"}
value={Textinputtime}
onChangeText= {SetTime}
autoComplete={false}
></TextInput>
<Ionicons name='time-outline' style={{alignSelf:"center"}} size={30} color={"blue"} > </Ionicons>
</View>
</TouchableOpacity>
{isDisplayTime && (
                  <DateTimePicker
                  
                     testID="dateTimePicker"
                     value={time}
                     mode={"time"}
                     display={'default'}
                     locale="SV"
                
                     onChange={handletimeconfirm}
                     
            />
         )}         
         <View style={{flexDirection:"row"}}>
            
             
         </View>

<View style={{padding:0, height:50, marginVertical:100, marginBottom:100, marginHorizontal:20, borderRadius:10 }}>
<Button title={'Submit'} buttonStyle={{height:55, borderRadius:10}}
onPress={submit}>
</Button>
</View>
</View>
);

}

const styles=StyleSheet.create({
container:{
    flex:1,
flexDirection:"column",

    backgroundColor:"skyblue",
    padding:10
}

})


