import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet, View, Text, Task, Alert, Dimensions } from "react-native";
import { Button, CheckBox, CheckBoxProps, ListItem } from "react-native-elements";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { getData, storeData } from "../../Database/StoreData";
import { task } from "../../Models/Task";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { array, number, object } from "yup";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../../components/Task/searchbar";
import NoTFound from "../../components/Task/tasknotfound";


export default function TaskScreen( ){

    const navigation = useNavigation();
    const [loading, setLoading,] = useState<boolean>(false)
    const [tasklist, setTasklist]= useState<Array<task> | null >();
    const [donelist, setDonelist] = useState ([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [resultnotfound, setResultNotDFound] = useState(false);

    const retrieveData = async () => {
        setLoading(true)
        const addtask = await getData ('addtask');
        if (addtask){
                const json = JSON.parse(addtask);
                setTasklist(json)
                console.log(json)
        }else{
            setTasklist(null);
        }
        setLoading(false)
    }
    const updatetask = async () =>{

        const jsonvalue = JSON.stringify(tasklist);

        await storeData('addtask', jsonvalue)
        retrieveData();
    }

    useFocusEffect(
        useCallback(() => {
            retrieveData();
        }, [])
      );

      const movetask =(index: number) =>{
        if (tasklist){
            Alert.alert("", "Are you Done with this task?",
                [{
                    text: "Yes",
                    style:"destructive",
                    onPress: ()=>{
                 
                      donelist.push(tasklist[index])
                        tasklist.splice (index, 1);
                        updatetask();
                    }
                },
                {
                    text: "No",
                    style:"default",
                    onPress: ()=>{}
                }
            
            ]
            )
        }
    }

    const deletetask =(index: number) =>{
        if (tasklist){
            Alert.alert("Delete", "Do you really want to delete this task",
                [{
                    text: "Yes",
                    style:"destructive",
                    onPress: ()=>{
                 
                  
                        donelist.splice (index, 1);
                        updatetask();
                    }
                },
                {
                    text: "No",
                    style:"default",
                    onPress: ()=>{}
                }
            ]
            )
        }
    }


    useFocusEffect(
        useCallback(() => {
            retrieveData();
        }, [])
      );

      const handleOnSearchInput = async TEXT =>{
        setSearchQuery(TEXT);
        if(!TEXT.trim()){
            setSearchQuery('');
            retrieveData()
            setResultNotDFound(false)
        }
        const filteredtask =  tasklist?.filter(note  => {
            if(note.Title.toLocaleLowerCase().includes(TEXT.toLocaleLowerCase())){
                return tasklist;
          
            }
        })

        if(filteredtask.length){
            setTasklist([...filteredtask])
        }else{
            setResultNotDFound(true)
        }
      }

      
return(

    <View style={{height: Dimensions.get('window').height, flex:1}}>
    <View style={styles.container}>
        
        {tasklist?.length ?(
            <SearchBar value={searchQuery} onChangeText={handleOnSearchInput} containerstyle={{marginVertical:1}}/>
        ):null}

{resultnotfound ? <NoTFound/> :  


    <ScrollView style={{marginTop:5}}>

    {tasklist?.map ((TASK:task, index: number ) => ( 
      <ListItem key={index} bottomDivider 
      onPress={()  => {navigation.navigate("Taskdrawer", {
        screen: "EditTask",
        params: {task:TASK, index:index}
      })}}

      containerStyle={{backgroundColor:"ivory", borderRadius:10, height:80}}
      style={{marginHorizontal:10,  borderRadius:10,  padding:0, marginTop:5 }}
      >
      <ListItem.Content style={{ padding:0, marginLeft:-7}}  >
        <ListItem.Title style={{fontWeight:"bold", fontSize:18}}>{TASK.Title}</ListItem.Title>
        <ListItem.Subtitle>{TASK.Description}</ListItem.Subtitle>
        <ListItem.Subtitle>{TASK.Textinputdate} {TASK.Textinputtime}</ListItem.Subtitle>
      </ListItem.Content>
      <Ionicons name = 'checkmark-circle-outline' size={30} color={"blue"} onPress={ () => {movetask(index)} }> </Ionicons>
    </ListItem>  
    ))}
</ScrollView>







}


<View style={{borderColor:"black", borderTopWidth:1, height:250}}>
{donelist ?  
  
<React.Fragment>
<Text style={{fontSize:30}}> Done list</Text>
<ScrollView style={{marginTop:5}}>
    {donelist.map ((TASK:task, index: number ) => ( 
      <ListItem key={index} bottomDivider 
      onPress={()  => {navigation.navigate("Taskdrawer", {
        screen: "EditTask",
        params: {task:TASK, index:index}
      })}}

      containerStyle={{backgroundColor:"ivory", borderRadius:10, height:80}}
      style={{marginHorizontal:10,  borderRadius:10,  padding:0, marginTop:5 }}
      >
      <ListItem.Content style={{ padding:0, marginLeft:-7}}  >
        <ListItem.Title style={{fontWeight:"bold", fontSize:18}}>{TASK.Title}</ListItem.Title>
        <ListItem.Subtitle>{TASK.Description}</ListItem.Subtitle>
        <ListItem.Subtitle>Due {TASK.Textinputdate} {TASK.Textinputtime}</ListItem.Subtitle>
      </ListItem.Content>
      <Ionicons name = 'checkmark-circle-outline' size={30} color={"red"} onPress={ () => {deletetask(index)} }> </Ionicons>
    </ListItem>  
    ))}
</ScrollView>
</React.Fragment>

:
<Text>

</Text>
}
</View>
<Button
containerStyle={{paddingTop:-80}}
buttonStyle={{borderRadius:10, marginHorizontal:10, height:55, marginVertical:15}}
title={"Add task"}
onPress={()  => {
    navigation.navigate("AddTask")
    
}}
/>

    </View>
    </View>

);

}

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"lightblue",
    height: "100%",
    width: Dimensions.get('window').width,
}

})