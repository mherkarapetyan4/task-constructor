import React, { useEffect, useMemo, useState } from "react";
import { Typography, Input } from "antd";
import useParts from "hooks/useParts";

const { Title: AntTitle } = Typography;

// const keys = ['title']
const Title = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [title, setTitle] = useState(FOUNDED["title"]);

    useEffect(() => {
        if (title !== FOUNDED.title) {
            changePart(id, { title });
        }
        return () => {
        };
    }, [title, id]);
    return <div>
        {
            editable ?
                <Input placeholder={"Заголовок"} onBlur={e => setTitle(e.target.value)}/>
                :
                <AntTitle>{title}</AntTitle>
        }
    </div>;
};

export default Title;
