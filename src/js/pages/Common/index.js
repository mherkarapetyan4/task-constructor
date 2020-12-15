import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import NewPart from "components/NewPart";
import { PartsStoreContext } from "stores/parts";
import CONSTRUCTOR_PARTS from 'components/constructorParts';

const Common = observer(() => {
    const {parts} = useContext(PartsStoreContext);
    const renderParts = () => {
        console.log("working renderParts");

        return <div>
            {
                parts.map((part, i) => {
                    const Component = CONSTRUCTOR_PARTS[part.componentType].component;
                    return  <Component  key={i} id={i} />
                })
            }
        </div>
    }
    return (
        <div>
            {renderParts()}
           <NewPart />
        </div>
    );
});

export default Common;
