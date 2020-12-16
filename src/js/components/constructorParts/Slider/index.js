import React, { useMemo, useState } from "react";
import { Button, Upload, Carousel } from "antd";
import useParts from "hooks/useParts";
import { PlusOutlined } from "@ant-design/icons";


// const keys = ['url']

const uploadButton = (
    <div>
        <PlusOutlined/>
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

const Slider = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [slider, setSlider] = useState(FOUNDED);
    const [defaultFileList, setDefaultFileList] = useState([]);
    const handleChange = info => {
        setDefaultFileList(info.fileList);
        if (info.file.status === "done") {
            const urls = [];
            console.log(info)
            info.fileList.forEach(file => {
                getBase64(file.originFileObj, imageUrl => {
                        urls.push({ text: "", url: imageUrl });
                    },
                );
            });

            setSlider({
                ...slider,
                urls
            });

        }
    };

    const dummyRequest = ({ onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const renderSlides = () => {
        return slider.urls.map((el, i) => <div key={i}><img src={el.url} alt={i}/></div>);

    };
    console.log(defaultFileList);
    // const renderPrev
    return <div>
        {
           ( editable || (!editable && !slider.urls.length)) ?
                <>
                    <Upload
                        accept="image/*"
                        name="avatar" listType="picture-card"
                        onChange={handleChange}
                        customRequest={dummyRequest}
                        multiple
                        defaultFileList={defaultFileList}
                    >
                        {uploadButton}
                    </Upload>
                    <Button onClick={() => {
                        // if (slider.url !== FOUNDED.url) {

                        changePart(id, { urls: slider.urls });
                        // }
                    }
                    }>Сохранить</Button>
                </>
                :
                <Carousel swipeToSlide>
                    {renderSlides()}
                </Carousel>

        }
    </div>;
};

export default Slider;
