import { createContext } from "react";
import { action, observable } from "mobx";
import { findIndex, generateID, makeObj, switchInArray } from "../utils";
import { TYPES } from "../config/consts";


class Parts {
    @observable parts = [];
    @observable currentDraggable = null;
    @action
    addNewPart = (part) => {
        this.parts = [...this.parts, part];
    };
    @action
    addToPartsWithIndex = (index) => {
        const obj = this.parts[index];
        this.parts.splice(index + 1, 0, makeObj(obj.componentType, TYPES[obj.componentType]));
    };
    @action
    changePart = (id, obj) => {
        const foundIndex = findIndex(this.parts, "id", id);
        this.parts[foundIndex] = {
            ...this.parts[foundIndex], ...obj,
            editable: false
        };
    };

    @action
    setCurrentDraggable = (dragId) => {
        this.currentDraggable = dragId;
    };


    @action
    onDropPart = (dropId) => {
        const droppable = findIndex(this.parts, "id", dropId);
        const draggable = findIndex(this.parts, "id", this.currentDraggable);

        this.parts = switchInArray(this.parts, droppable, draggable);
    };

    @action
    moveHandler = (index, isUp) => {
        const changableIndex = isUp ? index - 1 : index + 1;
        if (changableIndex < 0 && isUp || changableIndex > this.parts.length - 1 && !isUp) {
            return false;
        }
        this.parts = switchInArray(this.parts, index, changableIndex);
    };
    @action
    deleteHandler = index => {
        this.parts.splice(index, 1);
    };
    @action
    copyHandler = index => {
        const found = this.parts[index];
        this.parts.splice(index + 1, 0, { ...found, id: generateID(), editable: false });
    };
    @action
    makeEditable = (index, editable) => {
    const found = this.parts[index];
        this.parts.splice(index, 1, {...found, editable})
    }
     // @action
    // setProject = (project = {}) => {
    //     this.selectedProject = project;
    //     history.push(`/project/${project.id}`);
    // };
}

export const PartsStore = new Parts();

export const PartsStoreContext = createContext(PartsStore);
