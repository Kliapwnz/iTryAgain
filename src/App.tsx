import React from 'react';
import './App.css';
import {Header} from "./components/Header";


function App() {
    return (
        <div className="app-wrapper">
            <div className="header">
                <Header/>
            </div>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
            </nav>
            <div className="content">Content</div>
        </div>
    );
}

export default App;
