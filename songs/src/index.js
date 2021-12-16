import React from 'react';
import ReactDOM from 'react-dom';
// the curly braces indicate you are simple pulling a single function from the library
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
// reducers is exported by default export
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);