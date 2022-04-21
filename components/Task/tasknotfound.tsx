import { View, StyleSheet, TextInput, Text } from 'react-native';

import React from 'react';


 export default function NoTFound() {
    return (
        <View style={[ StyleSheet.absoluteFillObject, style.container]}>
     <Text style={{fontSize:25, fontWeight:"bold"}}> Task not Found </Text>
        </View>

    );
}

const style = StyleSheet.create({
    container:{
        justifyContent:"center", 
        alignContent:"center",
        flex:1,
        zIndex:-1
    }
})