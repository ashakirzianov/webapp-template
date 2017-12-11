import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { HelloWorld } from "./components/HelloWorld";
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}><HelloWorld name="Anton" /></Provider>,
    document.getElementById("root"),
);
