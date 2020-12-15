import {  useContext } from "react";
import { TYPES } from "../config/consts";
import { makeObj } from "../utils";
import { PartsStoreContext } from "../stores/parts";

const useParts = () => {
    const PartsStore = useContext(PartsStoreContext);
    const addNewPart = (key) => PartsStore.addNewPart(makeObj(TYPES[key]));

    return {
        addNewPart,
    };
};

export default useParts;
