import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {Contacts} from "./components/Contacts";
import {Experience} from "./components/Experience";
enum projectTypes {
    gmo = "GMO-Z RUNSYSTEM - React Native Developer",
    personal = "Personal Progject"
}
function App() {
    return (
        <>
            <Header></Header>
            <Contacts></Contacts>
            <Experience title="JACCS" startDate="Apr. 2019" endDate="Jun. 2019" projectType={projectTypes.gmo}>
                <p>React Native application for JACCS client.</p>
                <ul>
                    <li>Worked in a team of 5 developers. Deliver the product in 3 weeks.</li>
                    <li>
                        Implement features such as receiving notifications, loading screen, loading animations, querry
                        sorting.
                    </li>
                    <li>Contributed to features suggestion and bug fixing.</li>
                </ul>
            </Experience>
        </>
    );
}

export default App;
