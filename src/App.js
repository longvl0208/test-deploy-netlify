import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
    return (
        <div className="App hello">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>Deploy thành công nhưng đéo biết có bị mất phí hay ko</h1>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
