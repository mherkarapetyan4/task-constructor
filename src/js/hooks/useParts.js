import {  useContext } from "react";
import { TYPES } from "../config/consts";
import { makeObj } from "../utils";
import { PartsStoreContext } from "../stores/parts";

const useParts = () => {
    const PartsStore = useContext(PartsStoreContext);
    const addNewPart = (key) => PartsStore.addNewPart(makeObj(key, TYPES[key]));
    const changePart = (id, values) => PartsStore.changePart(id, values);
    return {
        parts: PartsStore.parts,
        addNewPart,
        changePart
    };
};

export default useParts;
