import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header : {
        backgroundColor: 'black'
    }
})

export default function HomeScreen({navigation}){
    return (
        <View>
            <View style={styles.header}><Text>test</Text></View>
            <Text>Home</Text>
        </View>
    )
}
