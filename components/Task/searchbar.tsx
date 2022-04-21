import { View, StyleSheet, TextInput } from 'react-native';

import React from 'react';


 const SearchBar = ({ containerstyle, value, onChangeText}) => {
    return(
        <View>
            <TextInput 
            value={value} 
            onChangeText={onChangeText} 
            placeholder='Search Here....'/>
        </View>
    
    )
}
export default SearchBar
