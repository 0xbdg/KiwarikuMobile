import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput, FlatList, Image} from "react-native"

const BLOG = [
    {
        "id": 1,
        "thumbnail": "https://www.dummyimage.com/400x400/000/fff",
        "title": "Blog #1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "date": "20/05/2006"
    },
    {
        "id": 2,
        "thumbnail": "https://www.dummyimage.com/400x400/000/fff",
        "title": "Blog #2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "date": "20/05/2006"
    },
    {
        "id": 3,
        "thumbnail": "https://www.dummyimage.com/400x400/000/fff",
        "title": "Blog #3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "date": "20/05/2006"
    },
]

const Article = ({id,thumbnail,title, description, date}) => (
    <View>
        <Image style={styles.image} source={{ uri: thumbnail}} />
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{date}</Text>
    </View>
);

export default function App() {
    const [text, onChangeText] = useState("Enter username")
    const [password, Query] = useState("Enter password")
    return (
        <ScrollView style={{ backgroundColor:"white"}}>
            <Text style={styles.text }>Hello World</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} autoComplete='name' />
            <TextInput style={styles.input}  onChangeText={Query} value={password} autoComplete='password' />
            <FlatList data={BLOG} renderItem={({item})=> <Article title={item.title} description={item.description} thumbnail={item.thumbnail} date={item.date} />} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "red"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    image:{
        height: 100,
        width: 100
    }
});