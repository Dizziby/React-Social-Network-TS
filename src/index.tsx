import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/store";
import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root')!)
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
