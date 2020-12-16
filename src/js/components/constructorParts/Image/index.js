import React, { useMemo, useState } from "react";
import { Button, Image as AntImage, Upload } from "antd";
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

const Image = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [image, setImage] = useState(FOUNDED);
    const handleChange = info => {
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, imageUrl =>
                setImage({
                    ...image,
                    url: imageUrl,
                }),
            );
        }
    };
    const dummyRequest = ({ onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };
    return <div>
        {
            editable ?
                <>
                    <Upload
                        name="avatar" listType="picture-card"
                        onChange={handleChange}
                        showUploadList={false}
                        customRequest={dummyRequest}
                    >
                        {image.url ? <img src={image.url} alt="avatar" style={{ width: "100%" }}/> : uploadButton}
                    </Upload>
                    <Button onClick={() => {
                        if (image.url !== FOUNDED.url) {
                            changePart(id, { url: image.url });
                        }
                    }
                    }>Сохранить</Button>
                </>
                :
                <AntImage preview={false} src={image.url} width={800} fallback={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmoorestown-mall.com%2Fnoimage.gif&f=1&nofb=1"}/>
        }
    </div>;
};

export default Image;
