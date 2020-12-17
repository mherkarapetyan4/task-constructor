import React, { useMemo, useState } from "react";
import { Button, Upload, Typography } from "antd";
import useParts from "hooks/useParts";
import {   VideoCameraAddOutlined } from "@ant-design/icons";


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

const Video = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [video, setVideo] = useState(FOUNDED);
    const handleChange = info => {
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, videoUrl =>
                setVideo({
                    ...video,
                    name: info.file.name,
                    url: videoUrl,
                }),
            );
        }
    };

    return <div>
        {
            editable ?
                <>
                    <Upload
                        name="video"
                        accept="video/*"
                        onChange={handleChange}
                        showUploadList={false}
                        customRequest={dummyRequest}
                    >
                        {video.url ? <div><VideoCameraAddOutlined /> <Typography.Text>{video.name}</Typography.Text></div> : uploadButton}
                    </Upload>
                    <Button onClick={() => {
                        if (video.url !== FOUNDED.url) {
                            changePart(id, { url: video.url });
                        }
                    }
                    }>Сохранить</Button>
                </>
                :
                <video width="320" height="240" controls>
                    <source src={video.url}/>
                    Your browser does not support the video tag.
                </video>

        }
    </div>;
};

export default Video;
