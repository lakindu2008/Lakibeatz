import React from "react";
import { View, Text, Image, useColorScheme, Linking, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function about() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? "#121212" : "#F2F2F2",
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
      }}
    >
      {/* App Icon */}
      <Image source={require("../assets/App_img/logo.png")} // <-- your logo
        style={{ width: 100, height: 100, borderRadius: 20, marginBottom: 25 }}
      />

      {/* App Name */}
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: isDark ? "#FFF" : "#000",
          marginBottom: 10,
        }}
      >
        🎧 Lakibeatz
      </Text>

      {/* Short Tagline */}
      <Text
        style={{
          color: isDark ? "#AAA" : "#444",
          fontSize: 16,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Feel the Beat. Enjoy the moment.  
        Your music, your vibe — anywhere, anytime.
      </Text>

      {/* About Description */}
      

      {/* Buttons / Links */}
     
      <TouchableOpacity
          onPress={() => Linking.openURL("https://www.youtube.com/@LakiBeatz")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: isDark ? "#333" : "#DDD",
            borderRadius: 35,
            width:"90%",
            height:55,
            justifyContent:"center",
            marginTop:10
          }}
        >
          <Ionicons
            name="star"
            size={20}
            color={isDark ? "#FFF" : "#000"}
          />
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              marginLeft: 8,
              fontWeight: "600",
            }}
          >
            Subscribe Now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/lakindu2008/Lakibeatz")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: isDark ? "#333" : "#DDD",
            borderRadius:35,
            width:"90%",
            height:55,
            justifyContent:"center",
            marginTop:10
          }}
        >
          <Ionicons
            name="home"
            size={20}
            color={isDark ? "#FFF" : "#000"}
          />
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              marginLeft: 8,
              fontWeight: "600",
            }}
          >
            Check Updates
          </Text>
        </TouchableOpacity>

         <TouchableOpacity
          onPress={() => Linking.openURL("https://www.instagram.com/lakindu_perera_/")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: isDark ? "#333" : "#DDD",
            borderRadius: 35,
            width:"90%",
            height:55,
            justifyContent:"center",
            marginTop:10
          }}
        >
          <Ionicons
            name="mail-outline"
            size={20}
            color={isDark ? "#FFF" : "#000"}
          />
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              marginLeft: 8,
              fontWeight: "600",
            }}
          >
            Follow Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/lakindu2008")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: isDark ? "#333" : "#DDD",
            borderRadius: 30,
            width:"90%",
            height:55,
            justifyContent:"center",
            marginTop:10
          }}
        >
          <Ionicons
            name="code"
            size={20}
            color={isDark ? "#FFF" : "#000"}
          />
          <Text
            style={{
              color: isDark ? "#FFF" : "#000",
              marginLeft: 8,
              fontWeight: "600",
            }}
          >
            About Developer
          </Text>
        </TouchableOpacity>
    

      {/* Footer */}
      <Text
        style={{
          position: "absolute",
          bottom: 30,
          color: isDark ? "#777" : "#666",
          fontSize: 13,
        }}
      >
        © {new Date().getFullYear()} Lakibeatz. All rights reserved.
      </Text>
    </View>
  );
}
