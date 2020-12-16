import React, { useContext } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { observer } from "mobx-react-lite";
import { Popover } from "antd";
import { PartsStoreContext } from "stores/parts";
import CONSTRUCTOR_PARTS from "components/constructorParts";
import DraggableElement from "components/dnd";
import PartActions from "components/PartActions";

const DragAndDrop = observer(() => {
    const PartsStore = useContext(PartsStoreContext);
    return (
        <DndProvider backend={Backend}>
            <div>
                {
                    PartsStore.parts.map((part, i) => {
                        const { component, icon } = CONSTRUCTOR_PARTS[part.componentType];
                        const Component = component;
                        const values = PartsStore.parts[i];
                        return <DraggableElement
                            key={part.id}
                            part={part}
                            setCurrentDraggable={PartsStore.setCurrentDraggable}
                            // onDragPart={PartsStore.onDragPart}
                            onDropPart={PartsStore.onDropPart}
                            editable={part.editable}
                        >
                            <div> {
                                part.editable ? <div>
                                    <Component  {...values}/>
                                </div> : <Popover
                                    content={
                                        <PartActions
                                            mainIcon={icon}
                                            moveDownHandler={() => PartsStore.moveHandler(i, false)}
                                            addNewPart={() => {
                                                PartsStore.addToPartsWithIndex(i);
                                            }}
                                            moveUpHandler={() => PartsStore.moveHandler(i, true)}
                                            copyHandler={() => {
                                                PartsStore.copyHandler(i);
                                            }}
                                            deleteHandler={() => {
                                                PartsStore.deleteHandler(i);
                                            }}
                                            editHandler={() => PartsStore.makeEditable(i, true)}
                                        />}
                                    placement={"rightTop"}
                                    trigger="click"
                                >
                                    <div>
                                        <Component  {...values}/>
                                    </div>
                                </Popover>
                            }

                            </div>

                        </DraggableElement>;
                    })
                }
            </div>
        </DndProvider>
    );
});

export { DragAndDrop };
