import React from "react";

import NewPart from "components/NewPart";

// import DraggableElement from "../../components/dnd";
import { DragAndDrop } from "../../containers/DragAndDrop";

const Common = () => {
    return (
        <div>
            <DragAndDrop/>
            <NewPart/>
        </div>
    );
}

export default Common;
