import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";

import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const root = createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
