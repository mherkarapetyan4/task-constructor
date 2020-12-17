import React, { useMemo, useState } from "react";
import { Typography, Button, Row, Col } from "antd";
import useParts from "hooks/useParts";

const { Paragraph } = Typography;

// const keys = ['title']
const Text = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [text, setText] = useState(FOUNDED);

    return <Row justify={"center"}>

        <Col xl={12}>
            <Paragraph editable={{
                icon: <div></div>,
                tooltip: false,
                editing: editable,
                onChange: v => setText({ ...text, text: v }),
            }}>{text.text}</Paragraph>
            {
                editable && <Button onClick={() => {
                    if (text.text !== FOUNDED.text)
                        changePart(id, { text: text.text });

                }
                }>Сохранить</Button>
            }
        </Col>
    </Row>;
};

export default Text;
