import React from 'react';
import {App} from "./App";
import {addMessage, addPost, changePostText, RootStateType, state} from "./redux/state";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export const rerenderEntireTree = (state: RootStateType) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} changePostText={changePostText}/>
        </React.StrictMode>
    );
}