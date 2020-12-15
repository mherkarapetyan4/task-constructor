import React, {useState} from "react";
import {Typography, Input} from 'antd';

const { Title: AntTitle} = Typography;

const Title = () => {
    const [ title, setTitle ] = useState('');
    return <div>
        <AntTitle>{title}</AntTitle>
        <br />
        <Input placeholder={'title'}  onBlur={e => setTitle(e.target.value)} />
    </div>;
};

export default Title;
