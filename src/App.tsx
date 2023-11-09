import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Content} from "./components/Content";


function App() {
    return (
        <div className="app-wrapper">
            <div className="header">
                <Header/>
            </div>
            <nav className="nav">
                <Navbar/>
            </nav>
            <div className="content">
                <Content/>
            </div>
        </div>
    );
}

export default App;
