import { createContext } from "react";
import { action, observable } from "mobx";

class Parts {
    @observable parts = [];
    @action
    addNewPart = (part) => {
        this.parts = [...this.parts, part];
    };
    // @action
    // setProject = (project = {}) => {
    //     this.selectedProject = project;
    //     history.push(`/project/${project.id}`);
    // };
}

export const PartsStore = new Parts();

export const PartsStoreContext = createContext(PartsStore);
