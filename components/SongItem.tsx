import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  song: any;
  play: Function;
  currentId: number | null;
  isPlaying: boolean;
  style: any;
};

export default function SongItem({
  song,
  play,
  currentId,
  isPlaying,
  style,
}: Props) {
  return (
    <View style={style.Song}>
      <Image style={style.background} source={song.image} />

      <View style={style.song_details}>
        <Text style={style.song_name1}>{song.title}</Text>

        <Ionicons
          name={
            currentId === song.id && isPlaying
              ? "pause-circle"
              : "play-circle"
          }
          size={40}
          color="white"
          style={style.icon2}
          onPress={() => play(song.id, song.url)}
        />
      </View>
    </View>
  );
}
