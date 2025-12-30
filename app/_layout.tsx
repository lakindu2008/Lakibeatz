import React from "react";
import { Tabs } from "expo-router";
import { StatusBar, StyleSheet, SafeAreaViewBase } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function RootLayout()  {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
    <React.Fragment>
      <StatusBar />
      <Tabs screenOptions={{ 
         tabBarStyle:{
          backgroundColor:"rgba(22, 22, 22, 0.99)",
          height:60,
         }
      }} >
        <Tabs.Screen name="index"  
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <Feather name="music" size={24} color="white" />
          ),
          title:"Songs",
          tabBarActiveTintColor:"white"
          }}/>

        <Tabs.Screen name="Playlist"
         options={{
          headerShown:false,
          tabBarIcon: () => (
            <Ionicons name="albums-outline" size={24} color="white" />
          ),
          tabBarActiveTintColor:"white",
          title:"Albums"
          }}/>
          <Tabs.Screen name="about" 
          options={{
            headerShown:false,
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={24} color="white" />
            ),
            tabBarActiveTintColor:"white",
            title:"About"
            }} />
     
      </Tabs>
    </React.Fragment>
     </SafeAreaView>
    </SafeAreaProvider>

  )
}

