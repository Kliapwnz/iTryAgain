import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Technologies} from "./components/Technologies";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    );
}

export default App;
