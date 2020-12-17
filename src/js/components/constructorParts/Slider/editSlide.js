import React, { useEffect, useState } from "react";
import { Col, Input, Row, Upload } from "antd";
import { dummyRequest, getBase64, uploadButton } from "../Image";
import { DeleteOutlined } from "@ant-design/icons";

const EditSlide = ({ image: defaultImage, text: defaultText, onChange, onDelete }) => {

    const [text, setText] = useState(defaultText);
    const [image, setImage] = useState(defaultImage);
    const handleChange = info => {
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, imageUrl =>
                setImage(imageUrl),
            );
        }
    };

    useEffect(() => {
        onChange(image, text);
    }, [image, text]);

    return <Row  style={{flexDirection: "row"}} align={"middle"} gutter={10}>
        <Col>
            <Upload
                name="image"
                listType="picture-card"
                onChange={handleChange}
                showUploadList={false}
                customRequest={dummyRequest}
            >
                {image ? <img src={image} alt="avatar" style={{ width: "100%" }}/> : uploadButton}

            </Upload>
        </Col>

        <Col onClick={onDelete}>
            <DeleteOutlined/>
        </Col>
        <Col>
            <Input value={text} onChange={e => setText(e.target.value)}/>
        </Col>
    </Row>;
};

export default EditSlide;
