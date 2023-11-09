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
                <div>
                    <a href="#s">Profile</a>
                </div>
                <div>
                    <a href="#s">Messages</a>
                </div>
                <div>
                    <a href="#s">News</a>
                </div>
                <div>
                    <a href="#s">Music</a>
                </div>
            </nav>
            <div className="content">Content</div>
        </div>
    );
}

export default App;
