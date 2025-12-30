import { ImageSourcePropType } from "react-native";

export type Song = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  url: string;
};

const SONGS: Song[] = [

  {
    id: 1,
    title: "අහිමි ඒ දෑස",
    image: require("../assets/App_img/img (13).jpg"),
    url: "url here",
  }

  add more 
 

export default SONGS;
