import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet, View, Text } from "react-native";


export default function ProfileScreen(){
return(

    <View style={styles.container}>
<Text> This is Profile Screen</Text>
        
    </View>
);

}

const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
}

})