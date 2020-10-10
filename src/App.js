import React from "react";
// import logo from './logo.svg'; import { Counter } from
// "./features/counter/Counter";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
    return (
        <div className="app">
            {/* sidebar */}
            <SideBar/> 
            {/* chat */}
            <Chat/>
        </div>
    );
}

export default App;
