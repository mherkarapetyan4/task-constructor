import React, { useMemo, useState } from "react";
import { Typography, Input, Button } from "antd";
import useParts from "hooks/useParts";

const { Paragraph } = Typography;

// const keys = ['title']
const Text = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [text, setText] = useState(FOUNDED);

    // useEffect(() => {
    //     if (text !== FOUNDED.text) {
    //         changePart(id, { text: text.text });
    //     }
    //     return () => {
    //     };
    // }, [text, id]);
    return <div>
        {
            editable ?
                <>

                    <Input placeholder={"Текст"} onChange={e => setText({ ...text, text: e.target.value })}/>
                    <Button onClick={() => {
                        if (text.text !== FOUNDED.text) {
                            changePart(id, { text: text.text });
                        }
                    }
                    }>Сохранить</Button>
                </>
                :
                <Paragraph>{text.text}</Paragraph>
        }
    </div>;
};

export default Text;
