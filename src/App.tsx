import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {Contacts} from "./components/Contacts";
import {Experience} from "./components/Experience";

function App() {
    return (
        <>
            <Header></Header>
            <Contacts></Contacts>
            <Experience title="JACCS" hasDemo hasGit startDate="Apr. 2019" endDate="Jun. 2019">
                <p>Working the jaccs app</p>
            </Experience>
        </>
    );
}

export default App;
