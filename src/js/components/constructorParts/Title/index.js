import React, {useState} from "react";
import {Typography, Input} from 'antd';
// import PropTypes from 'prop-types'
const { Title: AntTitle} = Typography;

const Title = (props) => {
    const {id}  = props;
    const [ title, setTitle ] = useState('');
    console.log( id)
    return <div>
        <AntTitle>{title}</AntTitle>
        <br />
        <Input placeholder={'title'}  onBlur={e => setTitle(e.target.value)} />
    </div>;
};

// Title.propTypes = {
//     id: PropTypes.string
// }

export default Title;

