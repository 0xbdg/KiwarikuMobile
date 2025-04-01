import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import ArticleScreen from './pages/article';
import HomeScreen from './pages/home';
import EventScreen from './pages/event';
import AnnouncementScreen from './pages/announcement';
import LoginScreen from './pages/login';

const Stack = createStackNavigator();

export default function App(){
    return (
        /*
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Artikel" component={ArticleScreen}></Stack.Screen>
                <Stack.Screen name="Kegiatan" component={EventScreen}></Stack.Screen>
                <Stack.Screen name="Pengumuman" component={AnnouncementScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        */
       <LoginScreen />
    )
}