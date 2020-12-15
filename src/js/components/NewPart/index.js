import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PARTS from "components/constructorParts";

const menu = () => {
    return (
        <Menu>
            {
                Object.keys(PARTS).map((key) => {
                    const { icon, label } = PARTS[key];
                    return <Menu.Item key={key} icon={icon} onClick={() => console.log("asdasd", key)}>
                        {label}
                    </Menu.Item>;
                })
            }
        </Menu>
    );
};
const NewPart = () => {
    return <div>
        <Dropdown overlay={menu}>
            <Button icon={<PlusOutlined/>}/>
        </Dropdown>
    </div>;
};

export default NewPart;
