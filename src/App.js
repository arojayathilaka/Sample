import React from 'react';
import {Greet} from './Components/Greet';
import Welcome from "./Components/Welcome";
import './App.css'

function App() {
    return (
        <div className="App">
            <Greet/>
            <Welcome/>
        </div>

    );
}

export default App;
