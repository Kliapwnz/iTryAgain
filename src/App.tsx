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
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </nav>
            <div className="content">Content</div>
        </div>
    );
}

export default App;
