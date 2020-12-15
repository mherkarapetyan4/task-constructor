import React, { useContext, useEffect } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { observer } from "mobx-react-lite";

import DroppableColumn from "components/Dnd/DroppableColumn";
import { ProjectsStoreContext } from "stores/projects";
import { TasksStoreContext } from "stores/tasks";

const DragAndDrop = observer(() => {
    const ProjectsStore = useContext(ProjectsStoreContext);
    const TasksStore = useContext(TasksStoreContext);

    useEffect(() => {
        TasksStore.getProjectTasks(ProjectsStore.selectedProject);
    }, []);

    return (
        <DndProvider backend={Backend}>
            <Wrapper>
                {TasksStore.tasks.map((el, index) => {
                    return (
                        <DroppableColumn
                            key={el.id}
                            dropColumnIndex={index}
                            dropColumnId={el.id}
                            tasks={el.items}
                            header={TasksStore.getStatusById(el.id).value}
                            onDropTask={TasksStore.onDropTask}
                            onDragTask={TasksStore.onDragTask}
                            setCurrentDraggable={TasksStore.setCurrentDraggable}
                            setIsSwitching={TasksStore.setIsSwitching}
                            isSwitching={TasksStore.isSwitching}
                        />
                    );
                })}
            </Wrapper>
        </DndProvider>
    );
});


export { DragAndDrop };
