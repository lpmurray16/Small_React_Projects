import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import App from "./components/App";

const store = createStore(reducers);

const root = createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
