import { useState } from "react";
import { View, FlatList, Image, ScrollView, StyleSheet } from "react-native";

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

const Template = ({id,thumbnail,title, description, date}) => (
    <View>
        <Image style={styles.thumbnail} source={{ uri: thumbnail}} />
        <Text style={styles.text_color}>{title}</Text>
        <Text style={styles.text_color}>{description}</Text>
        <Text style={styles.text_color}>{date}</Text>
    </View>
);

const styles = StyleSheet.create({
    thumbnail: {
        height: 100,
        width: 100
    },
    text_color: {
        color: "white"
    }
})

export default function ArticleScreen({navigation}){
    return (
        <ScrollView style={{ color: "#69BCB8"}}>
            <FlatList data={BLOG} renderItem={({item})=> <Template title={item.title} description={item.description} thumbnail={item.thumbnail} date={item.date} />} />
        </ScrollView>
    )
}