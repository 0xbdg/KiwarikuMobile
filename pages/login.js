import { useState } from "react";
import { View, TextInput, Text, Image, StyleSheet, Button, Alert, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    image : {
        width: 100,
        height: 100,
        alignItems: 'center',
        textAlign: 'center'
    },

    logininput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },

    text: {
        color: "white",
        margin: 12
    },

    button: {
        backgroundColor: 'cyan',
        padding: 10,
        margin: 12,
        width: 100,
        alignContent: 'center'
    }
})

function action(){
    Alert.alert("login")
}

export default function LoginScreen(){
    return (
        <View style={{ color: "#69BCB8"}}>
            <Image style={styles.image} source={ require("../media/logo.png")}/>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.logininput} placeholder="Ex: John Doe"/>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.logininput} placeholder="Ex: 1234" />
            <TouchableOpacity style={styles.button} onPress={action}><Text style={{ textAlign:'center'}}>Login</Text></TouchableOpacity>
        </View>
    )
}