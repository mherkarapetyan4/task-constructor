import React from 'react';
import styles from './PartActions.module.css'
import {DownOutlined, UpOutlined, CopyOutlined, DeleteOutlined, PlusSquareTwoTone, EditOutlined} from "@ant-design/icons";

const actions = [
    {
        icon: DownOutlined,
        onClick: "moveDownHandler"
    },
    {
        icon: UpOutlined,
        onClick: "moveUpHandler"
    },
    {
        icon: CopyOutlined,
        onClick: "copyHandler"
    },{
        icon: DeleteOutlined,
        onClick: "deleteHandler"
    },
    {
        icon: EditOutlined,
        onClick: "editHandler"
    }
]

const PartActions = (props) => {
    return <div className={styles.PartActionsWrapper}>
        <div className={styles.leftBar}>
            <div>
                {props.mainIcon}
            </div>
            <div onClick={props.addNewPart}>
                <PlusSquareTwoTone style={{fontSize: 20}}/>
            </div>
        </div>
        {
            actions.map((el, i) => {
                const Icon = el.icon;
                return  <div className={styles['action-wrapper']} key={i} onClick={props[el.onClick]}>
                    <Icon  style={{color: "white"}}/>
                </div>
            })
        }

    </div>
}

export default PartActions;
