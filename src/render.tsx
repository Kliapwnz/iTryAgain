import React from 'react';
import {App} from "./App";
import {addPost, state} from "./redux/state";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}