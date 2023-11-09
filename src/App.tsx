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
            <div className="content">
                <div>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/008/972/370/non_2x/logo-for-a-hacker-anonymous-anonymous-esport-logo-for-community-team-esport-squad-and-team-free-vector.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>Post1</div>
                    <div>Post2</div>
                    <div>Post3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
