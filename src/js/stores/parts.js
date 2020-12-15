import { createContext } from "react";
import { action, observable, runInAction } from "mobx";

class Parts {
    @observable parts = [];
    @action
    getProjects = () => {

    };
    // @action
    // setProject = (project = {}) => {
    //     this.selectedProject = project;
    //     history.push(`/project/${project.id}`);
    // };
}

export const PartsStore = new Parts();

export const PartsStoreContext = createContext(PartsStore);
