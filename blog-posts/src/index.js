import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Import the main App component and the reducers
import App from "./components/App";
import reducers from "./reducers";

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
);
