import React, { useMemo, useState } from "react";
import { Button, Upload, Typography } from "antd";
import useParts from "hooks/useParts";
import { AudioOutlined } from "@ant-design/icons";


// const keys = ['url']

const uploadButton = (
    <div>
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

export const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};

const Audio = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [audio, setAudio] = useState(FOUNDED);
    const handleChange = info => {
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, audioUrl =>
                setAudio({
                    ...audio,
                    name: info.file.name,
                    url: audioUrl,
                }),
            );
        }
    };

    return <div>
        {
            editable ?
                <>
                    <Upload
                        name="audio"
                        accept="audio/*"
                        onChange={handleChange}
                        showUploadList={false}
                        customRequest={dummyRequest}
                    >
                        {audio.url ?
                            <div><AudioOutlined/> <Typography.Text>{audio.name}</Typography.Text></div> : uploadButton}
                    </Upload>
                    <Button onClick={() => {
                        if (audio.url !== FOUNDED.url) {
                            changePart(id, { url: audio.url });
                        }
                    }
                    }>Сохранить</Button>
                </>
                :
                <audio controls>
                    <source src={audio.url}/>
                    Your browser does not support the video tag.
                </audio>
        }
    </div>;
};

export default Audio;
