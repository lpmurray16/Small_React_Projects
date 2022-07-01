import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";

import "../styles/global.css";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route
                        path="/streams/delete/:id"
                        component={StreamDelete}
                    />
                    <Route path="/streams/:id" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;