import { View, StyleSheet, TextInput } from 'react-native';

import React from 'react';


 const SearchBar = ({  value, onChangeText}) => {
    return(
        <View style={style.containerstyle}>
            <TextInput 
            value={value} 
            onChangeText={onChangeText} 
            placeholder='Search Here....' 
            />
        </View>
    
    )
}
export default SearchBar

const style=StyleSheet.create({
containerstyle:{
borderWidth:1,
borderColor:"black",
marginHorizontal:10,
borderRadius:10,
height:40,

}

})
