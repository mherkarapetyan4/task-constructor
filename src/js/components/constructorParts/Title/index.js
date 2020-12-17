import React, { useMemo, useState } from "react";
import { Typography, Input, Button, Col, Row } from "antd";
import useParts from "hooks/useParts";

const { Title: AntTitle } = Typography;

// const keys = ['title']
const Title = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [title, setTitle] = useState(FOUNDED["title"]);

    return <Row justify={"center"}>
        {
            editable ?
                <Col xl={12}>
                    <Input placeholder={"Заголовок"} onChange={e => setTitle(e.target.value)} value={title}/>
                    <Button

                        onClick={() => {
                        changePart(id, { title });
                    }
                    }>Сохранить</Button>
                </Col>
                :
                <Col><AntTitle>{title}</AntTitle></Col>
        }
    </Row>;
};

export default Title;
