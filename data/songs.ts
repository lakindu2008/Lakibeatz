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
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598399/Ahimi_e_dasa_%E0%B6%85%E0%B7%84%E0%B7%92%E0%B6%B8%E0%B7%92_%E0%B6%92_%E0%B6%AF%E0%B7%91%E0%B7%83_Slowed_reverb_DILUBeats_-_LakiBeatz_zaclfq.mp3",
  },
  {
    id: 2,
    title: "මනෝපාරකට සිංදු",
    image: require("../assets/App_img/img (9).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598915/%E0%B6%B8%E0%B6%B1%E0%B7%9D%E0%B6%B4%E0%B7%8F%E0%B6%BB%E0%B6%9A%E0%B6%A7_%E0%B7%84%E0%B7%9C%E0%B6%AF%E0%B6%B8_%E0%B7%83%E0%B7%92%E0%B6%82%E0%B6%AF%E0%B7%94_%E0%B6%A7%E0%B7%92%E0%B6%9A_%EF%B8%8F__Manoparakata_Sinhala_Songs_Collection_2025_-_LakiBeatz_wvf0c3.mp3",
  },
  {
    id: 3,
    title: "මේ හිත සනසා",
    image: require("../assets/App_img/img (10).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766600397/Me_hitha_sanasa_%E0%B6%B8%E0%B7%9A_%E0%B7%84%E0%B7%92%E0%B6%AD_%E0%B7%83%E0%B6%B1%E0%B7%83%E0%B7%8F_Slowed_reverb_-_LakiBeatz_1_szlbrq.mp3",
  },
  {
    id: 4,
    title: "දිව්රා කියන්න",
    image: require("../assets/App_img/img (33).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598601/Diura_Kiyanna_-_%E0%B6%AF%E0%B7%92%E0%B7%80%E0%B7%8A%E0%B6%BB%E0%B7%8F_%E0%B6%9A%E0%B7%92%E0%B6%BA%E0%B6%B1%E0%B7%8A%E0%B6%B1_slowed_reverb_-_LakiBeatz_orn1rd.mp3",
  },
  {
    id: 5,
    title: "දෝණි - Slowed",
    image: require("../assets/App_img/img (31).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598575/Doni_-_%E0%B6%AF%E0%B7%9D%E0%B6%AB%E0%B7%92_Slowed_Reverb_Trending_-_LakiBeatz_xevw5j.mp3",
  },
  {
    id: 6,
    title: "සඳ නුඹ ඇවිදින්",
    image: require("../assets/App_img/img (28).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598750/Sanda_Nuba_Awidin_%E0%B7%83%E0%B6%B3_%E0%B6%B1%E0%B7%94%E0%B6%B9_%E0%B6%87%E0%B7%80%E0%B7%92%E0%B6%AF%E0%B7%92%E0%B6%B1%E0%B7%8A_Slowed_Reverb_-_LakiBeatz_jgrfig.mp3",
  },
  {
    id: 7,
    title: "අතහැරලා - Slowed",
    image: require("../assets/App_img/img (5).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598607/Athaharala_-_%E0%B6%85%E0%B6%AD%E0%B7%84%E0%B7%90%E0%B6%BB%E0%B6%BD%E0%B7%8F_Slowed_Reverb_-_LakiBeatz_xsvxnx.mp3",
  },
  {
    id: 8,
    title: "ලැබුනෝතින් වරම්",
    image: require("../assets/App_img/img (6).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598452/Labunothin_Waram_%E0%B6%BD%E0%B7%90%E0%B6%B6%E0%B7%94%E0%B6%B1%E0%B7%9D%E0%B6%AD%E0%B7%92%E0%B6%B1%E0%B7%8A_%E0%B7%80%E0%B6%BB%E0%B6%B8%E0%B7%8A_Slowed_Reverb_-_LakiBeatz_p8sfj9.mp3",
  },
  {
    id: 9,
    title: "දෑසේ දුරින්",
    image: require("../assets/App_img/img (20).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766599052/Dase_Durin_%E0%B6%AF%E0%B7%91%E0%B7%83%E0%B7%9A_%E0%B6%AF%E0%B7%94%E0%B6%BB%E0%B7%92%E0%B6%B1%E0%B7%8A_-Dilu_Beats-_slowed_reverbed_-_LakiBeatz_1_hnnlwd.mp3",
  },
  {
    id: 10,
    title: "දුරස් වෙලා වෙනස් වෙලා",
    image: require("../assets/App_img/img (15).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598495/Duras_Wela_Wenas_Wela_-_%E0%B6%AF%E0%B7%94%E0%B6%BB%E0%B7%83%E0%B7%8A_%E0%B7%80%E0%B7%99%E0%B6%BD%E0%B7%8F_%E0%B7%80%E0%B7%99%E0%B6%B1%E0%B7%83%E0%B7%8A_%E0%B7%80%E0%B7%99%E0%B6%BD%E0%B7%8F_Slowed_Reverb_-_LakiBeatz_wnpe1q.mp3",
  },
  {
    id: 11,
    title: "වෛවාර",
    image: require("../assets/App_img/img (3).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766601684/Waiwara_%E0%B7%80%E0%B7%9B%E0%B7%80%E0%B7%8F%E0%B6%BB_slowed_reverb__DILUBeats__-_LakiBeatz_1_wrwp2o.mp3",
  },
  {
    id: 12,
    title: "නුඹගෙන් පැතු ආලේ මා",
    image: require("../assets/App_img/img (30).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598696/Nubagen_Pathu_Ale_%E0%B6%B1%E0%B7%94%E0%B6%B9%E0%B6%9C%E0%B7%99%E0%B6%B1%E0%B7%8A_%E0%B6%B4%E0%B7%90%E0%B6%AD%E0%B7%94_%E0%B6%86%E0%B6%BD%E0%B7%9A_%E0%B6%B8%E0%B7%8F_-_Slowed_Reverb___-_LakiBeatz_rzsg3a.mp3",
  },
  {
    id: 13,
    title: "ithin Ko Song",
    image: require("../assets/App_img/img (23).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598559/ithin_ko_slowed_Reverb_-_LakiBeatz_w3xkfy.mp3",
  },
  {
    id: 14,
    title: "හත්පෙති මල්",
    image: require("../assets/App_img/img (35).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766602101/%E0%B7%84%E0%B6%AD%E0%B7%8A%E0%B6%B4%E0%B7%99%E0%B6%AD%E0%B7%92_%E0%B6%B8%E0%B6%BD%E0%B7%8A_Hath_pethi_Mal_-_Iman_Fernando_Slowed_Reverb_-_LakiBeatz_elqiyc.mp3",
  },
  {
    id: 15,
    title: "හිමි නැති ආදරේක",
    image: require("../assets/App_img/img (36).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598749/%E0%B7%84%E0%B7%92%E0%B6%B8%E0%B7%92_%E0%B6%B1%E0%B7%90%E0%B6%AD%E0%B7%92_%E0%B6%86%E0%B6%AF%E0%B6%BB%E0%B7%9A%E0%B6%9A_Himi_Nathi_Adareka_Slowed_Reverb_-_LakiBeatz_ngbhbs.mp3",
  },
  {
    id: 16,
    title: "ආශීර්වාදය",
    image: require("../assets/App_img/img (7).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598750/Ashirwadaya_Slow_and_Reverb_%E0%B6%86%E0%B7%81%E0%B7%93%E0%B6%BB%E0%B7%8A%E0%B7%80%E0%B7%8F%E0%B6%AF%E0%B6%BA_-_LakiBeatz_e4vrvm.mp3",
  },
  {
    id: 17,
    title: "විරාමයක්",
    image: require("../assets/App_img/img (8).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598876/%E0%B7%80%E0%B7%92%E0%B6%BB%E0%B7%8F%E0%B6%B8%E0%B6%BA%E0%B6%9A%E0%B7%8A_Viramayak_Slowed_Reverb_-_LakiBeatz_jeytyd.mp3",
  },
  {
    id: 18,
    title: "නොදැනුවත් කමට",
    image: require("../assets/App_img/img (4).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598721/Nodanuwath_Kamata_%E0%B6%B1%E0%B7%9C%E0%B6%AF%E0%B7%90%E0%B6%B1%E0%B7%94%E0%B7%80%E0%B6%AD%E0%B7%8A_%E0%B6%9A%E0%B6%B8%E0%B6%A7_Slowed_Reverb_-_LakiBeatz_l6yitb.mp3",
  },
  {
    id: 19,
    title: "මතකයන් ඔබේ",
    image: require("../assets/App_img/img (27).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598612/%E0%B6%B8%E0%B6%AD%E0%B6%9A%E0%B6%BA%E0%B6%B1%E0%B7%8A_%E0%B6%94%E0%B6%B6%E0%B7%9A_Slowed_Reverb_Mathakayan_obe_-_LakiBeatz_rdkzew.mp3",
  },
  {
    id: 20,
    title: "හඬන තරම්",
    image: require("../assets/App_img/img (1).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598424/Handana_Tharam_%E0%B7%84%E0%B6%AC%E0%B6%B1_%E0%B6%AD%E0%B6%BB%E0%B6%B8%E0%B7%8A_slowed_reverb_-_LakiBeatz_gs7ty9.mp3",
  },
  {
    id: 21,
    title: "ඇස් දෙක පුරා",
    image: require("../assets/App_img/img (12).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598516/As_Deka_Pura_%E0%B6%87%E0%B7%83%E0%B7%8A_%E0%B6%AF%E0%B7%99%E0%B6%9A_%E0%B6%B4%E0%B7%94%E0%B6%BB%E0%B7%8F_Slowed_Reverb_-_LakiBeatz_uxfvs4.mp3",
  },
  {
    id: 22,
    title: "Hamuwee Wenwee",
    image: require("../assets/App_img/img (11).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598174/Hamuwee_Wenwee_Gewena_slowed_reverb_-_LakiBeatz_ueej66.mp3",
  },
  {
    id: 23,
    title: "මියදෙන්නම් සදා",
    image: require("../assets/App_img/img (24).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598498/Miyadennam_Sada_%E0%B6%B8%E0%B7%92%E0%B6%BA%E0%B6%AF%E0%B7%99%E0%B6%B1%E0%B7%8A%E0%B6%B1%E0%B6%B8%E0%B7%8A_%E0%B7%83%E0%B6%AF%E0%B7%8F_Slowed_Reverb_-_LakiBeatz_z6bsfl.mp3",
  },
  {
    id: 24,
    title: "හිත් ඔච්චම්",
    image: require("../assets/App_img/img (18).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598830/Hith_ochcham_%E0%B7%84%E0%B7%92%E0%B6%AD%E0%B7%8A_%E0%B6%94%E0%B6%A0%E0%B7%8A%E0%B6%A0%E0%B6%B8%E0%B7%8A_Slowed_Reverb_-_LakiBeatz_z9qzv4.mp3",
  },
  {
    id: 25,
    title: "සිදඟන",
    image: require("../assets/App_img/img (25).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598723/Sindagana_%E0%B7%83%E0%B7%92%E0%B6%AF%E0%B6%9F%E0%B6%B1_slowed_reverb_-_LakiBeatz_ukgiqv.mp3",
  },
  {
    id: 26,
    title: "රූ සිරි",
    image: require("../assets/App_img/img (29).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598876/Ru_siri_%E0%B6%BB%E0%B7%96_%E0%B7%83%E0%B7%92%E0%B6%BB%E0%B7%92_slowed_reverb_-_LakiBeatz_n0mdqu.mp3",
  },
  {
    id: 27,
    title: "හැමදාම ආවත්",
    image: require("../assets/App_img/img (19).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598499/Hamadama_Awath_-_%E0%B7%84%E0%B7%90%E0%B6%B8%E0%B6%AF%E0%B7%8F%E0%B6%B8_%E0%B6%86%E0%B7%80%E0%B6%AD%E0%B7%8A_%E0%B6%B8%E0%B6%9C%E0%B7%9A_%E0%B7%84%E0%B7%93%E0%B6%B1%E0%B7%99%E0%B6%A7_Slowed_Reverb_-_LakiBeatz_jnsedq.mp3",
  },
  {
    id: 28,
    title: "මැවිලා",
    image: require("../assets/App_img/img (2).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766598727/Dilu_Beats_%E0%B6%B8%E0%B7%90%E0%B7%80%E0%B7%92%E0%B6%BD%E0%B7%8F_mawila_slowed_reverb_-_LakiBeatz_mmnll0.mp3",
  },
  {
    id: 29,
    title: "අමාවක",
    image: require("../assets/App_img/img (26).jpg"),
    url: "https://res.cloudinary.com/djoetggso/video/upload/v1766604087/Amawaka_%E0%B6%85%E0%B6%B8%E0%B7%8F%E0%B7%80%E0%B6%9A_slowed_reverb_-_LakiBeatz_1_qfwxix.mp3",
  },
];

export default SONGS;