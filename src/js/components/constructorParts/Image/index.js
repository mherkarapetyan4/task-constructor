import React, { useMemo, useState } from "react";
import { Button, Col, Image as AntImage, Row, Upload } from "antd";
import useParts from "hooks/useParts";
import { PlusOutlined } from "@ant-design/icons";


// const keys = ['url']

export const uploadButton = (
    <div>
        <PlusOutlined/>
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

export function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

export const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};

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

    return <Row justify={"center"}>
        {
            editable ?
                <Col xl={12}>
                    <Upload
                        name="avatar" listType="picture-card"
                        onChange={handleChange}
                        showUploadList={false}
                        customRequest={dummyRequest}
                    >
                        {image.url ? <img src={image.url} alt="avatar" style={{ width: "100%" }}/> : uploadButton}
                    </Upload>
                    <Button onClick={() => {
                            changePart(id, { url: image.url });
                    }
                    }>Сохранить</Button>
                </Col>
                :
                <AntImage preview={false} src={image.url} width={300} fallback={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmoorestown-mall.com%2Fnoimage.gif&f=1&nofb=1"}/>
        }
    </Row>;
};

export default Image;
