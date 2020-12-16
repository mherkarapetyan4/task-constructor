import React from "react";
import flow from "lodash.flow";
import { DragSource, DropTarget } from "react-dnd";

const itemSource = {
    beginDrag(props) {
            props.setCurrentDraggable(props.part.id);
            return props.part;

    },
    // endDrag(props, monitor) {
    //     if (monitor.didDrop()) {
    //         props.onDragPart(
    //             props.part.id,
    //         );
    //     }
    // },
};

const itemTarget = {
    drop(props) {

        props.onDropPart(props.part.id);
    },
};
const DraggableElement = ({ children, connectDragSource, connectDropTarget, editable }) => {
    return editable ?  children : connectDragSource(
        connectDropTarget(
            <div>
                {children}
            </div>,
        ),
    );
};

export default flow(
    DragSource("itemTarget", itemSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        dragItem: monitor.getItem(),
    })),
    DropTarget("itemTarget", itemTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
    })),
)(DraggableElement);
