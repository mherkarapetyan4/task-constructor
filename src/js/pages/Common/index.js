import React from "react";
import { observer } from "mobx-react-lite";

import NewPart from "../../components/NewPart";
const Common = observer(() => {
    // const TasksStore = useContext(TasksStoreContext);

    return (
        <div>
           <NewPart />
        </div>
    );
});

export default Common;
