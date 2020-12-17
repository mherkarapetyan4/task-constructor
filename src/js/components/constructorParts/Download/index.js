import React, { useMemo, useState } from "react";
import { Button, Upload, Typography, Card } from "antd";
import useParts from "hooks/useParts";
import { AudioOutlined } from "@ant-design/icons";


// const keys = ['url']

const uploadButton = (
    <div>
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => callback(reader.result));
//     reader.readAsDataURL(img);
// }

export const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};

const Download = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [file, setFile] = useState(FOUNDED);
    const handleChange = info => {
        if (info.file.status === "done") {
            // getBase64(info.file.originFileObj, fileUrl => {
            const downloadFile = URL.createObjectURL(info.file.originFileObj);

            setFile({
                ...file,
                file: info.file,
                url: downloadFile,
            });
            //     }
            // );


        }
    };
    console.log(file.file);

    return <div>
        {
            (editable || (!editable && !file.url)) ?
                <>
                    <Upload
                        name="audio"
                        onChange={handleChange}
                        showUploadList={false}
                        customRequest={dummyRequest}
                    >
                        {file.file ?
                            <div><AudioOutlined/> <Typography.Text>{file.file.name}</Typography.Text>
                            </div> : uploadButton}
                    </Upload>
                    <Button onClick={() => {
                        if (file.url !== FOUNDED.url) {
                            changePart(id, { file: file.file, url: file.url });
                        }
                    }
                    }>Сохранить</Button>
                </>
                :
                <Card title={file.file.name}>
                    <a download={file.file.name} href={file.url}

                    >Download</a>
                </Card>
        }
    </div>;
};

export default Download;
