import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet, View, Text, Task, Alert, Dimensions } from "react-native";
import { Button, CheckBox, CheckBoxProps, ListItem } from "react-native-elements";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { getData, storeData } from "../../Database/StoreData";
import { task } from "../../Models/Task";
import { ScrollView } from "react-native-gesture-handler";
import { array, number, object } from "yup";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen( ){

return(

    <View style={{height: Dimensions.get('window').height, flex:1}}>
    <View style={styles.container}>


<View>
<Text> Main Screen</Text>
</View>

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








