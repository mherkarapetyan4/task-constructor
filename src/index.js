import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "containers/AppContainer";

const renderContainer = (App) => {
    ReactDOM.render(<App />, document.getElementById("app"));
};

renderContainer(AppContainer);

if (module.hot) {
    module.hot.accept("./js/containers/AppContainer", () => {
        const NewApp = require("./js/containers/AppContainer").default;
        renderContainer(NewApp);
    });
}
