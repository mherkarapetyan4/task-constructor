import React from "react";
import Title from "./Title";
import Text from "./Text";
import Image from "./Image";
import Slider from "./Slider";
import { FileTextTwoTone, FileImageTwoTone, SlidersTwoTone } from "@ant-design/icons";

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
};

export default parts;
