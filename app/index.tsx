import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { fonts } from "../styles/fonts";
import SONGS from "../data/songs";
import SongItem from "../components/SongItem";
import { useAudioPlayer } from "../songs_details/songs";

export default function Index() {
  const { play, currentId, isPlaying } = useAudioPlayer();

  return (
    <View style={style.body}>
      {/* HEADER */}
     <View style={style.topbar1}>
        <View style={style.titlebar2}>
          <Text style={{color: "white",fontFamily: fonts.bold,fontSize:18,marginRight:130}}>Lakibeatz</Text>
        </View>
        <Image style={{width: 50,height: 50,borderRadius: 50,}} source={require('../assets/App_img/logo.png')}></Image>
      </View>


      {/* TITLE BAR */}
      <View style={style.topbar1}>
        <View style={style.titlebar}>
          <Text style={style.txt2}>Slowed & Reverb Songs </Text>
           <Image style={style.search} source={require('../assets/App_img/animated.gif')}></Image>
        </View>
       
      </View>

      {/* SONG LIST */}
      <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
        {SONGS.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            play={play}
            currentId={currentId}
            isPlaying={isPlaying}
            style={style}
          />
        ))}
        {/* SEE MORE */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@LakiBeatz")
          }
        >
          <View style={style.Song_end}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  marginRight: 20,
                }}
                source={require("../assets/App_img/animated.gif")}
              />
              <Text style={{ color: "white", fontFamily: fonts.bold }}>
                See More Songs
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "rgba(12, 12, 12, 1)",
    alignItems: "center",
  },
  head: {
    width: "100%",
    height: 55,
    borderRadius: 30,
    marginTop: 25,
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft:"45%",
  },
  name: {
    color: "white",
    fontFamily: fonts.bold,
    fontSize: 17,
    marginLeft:35
  },
  Song: {
    width: "95%",
    height: 250,
    backgroundColor: "rgba(29, 28, 28, 1)",
    borderRadius: 20,
    marginTop: 20,
    margin: "auto",
  },
  background: {
    width: "93%",
    height: 180,
    borderRadius: 20,
    marginTop: 12,
    marginLeft: 11,
  },
  scroll: {
    width: "90%",
    marginTop: 5,
  },
  txt2: {
    color: "white",
    fontFamily: fonts.bold,
    marginLeft:10
  },
  titlebar: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(47, 148, 89, 1)",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    flexDirection: "row",
  },
  titlebar2:{
    width: "80%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    flexDirection: "row",
  },
  topbar1: {
    width: "85%",
    flexDirection: "row",
    marginTop: 22,
  },
  search: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft:30
  },
  song_details: {
    flexDirection: "row",
  },
  song_name1: {
    color: "white",
    fontFamily: fonts.bold,
    marginLeft: 20,
    marginTop: 20,
  },
  icon2: {
    marginLeft: "auto",
    marginRight: 18,
    marginTop: 7,
  },
  Song_end: {
    width: "95%",
    height: 150,
    backgroundColor: "rgba(24, 23, 22, 1)",
    borderRadius: 20,
    marginTop: 20,
    margin: "auto",
    justifyContent: "center",
  },
});
