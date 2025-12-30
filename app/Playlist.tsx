import React from "react";
import { View, Text, Image, Linking, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from '../styles/fonts';

export default function Playlist() {
    return (
        <View style={{flex:1,backgroundColor:"rgb(22,22,22)",alignItems:"center"}}>
          <View style={(style.titlebar)}>
            <Text style={(style.txt3)}>Song Albums 🎧</Text>
          </View>
            <ScrollView style={{width:"95%",marginLeft:35,marginTop:10}}>
               <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/playlist?list=PLCfc7FhN9a3naGbfYvVk6e2npEeXNuEAF")} >
                   <View style={(style.Song)}>
                      <Image style={(style.background)} source={require('../assets/App_img/album1.jpg')}></Image>
                     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:100,marginTop:5}}>
                        <Text style={(style.txt)}>Popular Songs</Text>
                        <Ionicons 
                           name="play-circle"
                           color={"white"}
                           size={40}
                        />
                     </View>
                   </View>
               </TouchableOpacity>
              
             
             <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/playlist?list=PLCfc7FhN9a3ncHT6eCncGtr5YVdBsOkre")} >
                <View style={(style.Song)}>
                      <Image style={(style.background)} source={require('../assets/App_img/album1.jpg')}></Image>
                     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:100,marginTop:5}}>
                        <Text style={(style.txt)}>මනෝපාරකට සිංදු</Text>
                        <Ionicons 
                           name="play-circle"
                           color={"white"}
                           size={40}
                        />
                     </View>
                   </View>
               </TouchableOpacity>
          </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    Song:{
    width:"90%",
    height:250,
    backgroundColor:"rgba(29, 28, 28, 1)",
    borderRadius:20,
    marginTop:20,
    alignItems:"center",
  },
  background:{
    width:"93%",
    height:180,
    borderRadius:20,
    marginTop:12,
  },
  box1:{
    width:"90%",
    height:50,
    backgroundColor:"rgba(235, 235, 235, 1)",
    borderRadius:30,
    marginTop:30,
    justifyContent:"center",
    paddingLeft:30
  },
  txt:{
    color:"white",
    fontFamily: fonts.bold,
  },
  titlebar:{
    backgroundColor:"rgba(15, 158, 70, 1)",
    width:"85%",
    height:50,
    borderRadius:40,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center"
  },
  txt3:{
    fontFamily: fonts.bold,
    color:"white"
  }
})