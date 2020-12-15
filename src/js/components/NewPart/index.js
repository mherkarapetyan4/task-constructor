import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PARTS from "components/constructorParts";
import useParts from "hooks/useParts";

const MenuOverlay = () => {
    const { addNewPart } = useParts();
    return (
        <Menu>
            {
                Object.keys(PARTS).map((key) => {
                    const { icon, label } = PARTS[key];
                    return <Menu.Item
                        key={key}
                        icon={icon}
                        onClick={() => addNewPart(key)}>
                        {label}
                    </Menu.Item>

                })
            }
        </Menu>
    );
};
const NewPart = () => {
    return <div>
        <Dropdown overlay={<MenuOverlay />}>
            <Button icon={<PlusOutlined/>}/>
        </Dropdown>
    </div>;
};

export default NewPart;
