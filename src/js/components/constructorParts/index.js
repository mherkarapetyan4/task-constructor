import React from "react";
import Title from "./Title";
import Text from "./Text";
import Image from "./Image";
import Slider from "./Slider";
import Video from "./Video";
import Audio from "./Audio";
import Download from "./Download";

import { FileTextTwoTone, FileImageTwoTone, SlidersTwoTone, VideoCameraTwoTone, AudioTwoTone, FileAddTwoTone } from "@ant-design/icons";

const styles = {
    fontSize: 20,
};

const parts = {
    title: {
        label: "Заголовок",
        icon: <FileTextTwoTone style={styles}/>,
        component: Title,
    },
    text: {
        label: "Текст",
        icon: <FileTextTwoTone style={styles}/>,
        component: Text,
    },
    image: {
        label: "Изображение",
        icon: <FileImageTwoTone style={styles}/>,
        component: Image,
    },
    slider: {
        label: "Карусель изображений",
        icon: <SlidersTwoTone style={styles}/>,
        component: Slider,
    },
    video: {
        label: "Видео",
        icon: <VideoCameraTwoTone style={styles}/>,
        component: Video,
    },
    audio: {
        label: "Аудио файл",
        icon: <AudioTwoTone style={styles}/>,
        component: Audio,
    },
    download: {
        label: "Файл для скачивания",
        icon: <FileAddTwoTone style={styles}/>,
        component: Download,
    },
};

export default parts;
