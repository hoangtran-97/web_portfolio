import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {Contacts} from "./components/Contacts";
import {Experiences} from "./components/Experiences";
import {Skills} from "./components/Skills";
import {Navigation} from "./components/Navigation";
import {Blogs} from "./components/Blogs";

function App() {
    return (
        <div className="container">
            <div className="header">
                <Header></Header>
            </div>
            <div className="contacts" id="nav-contacts">
                <Contacts></Contacts>
            </div>
            <div className="skills" id="nav-skills">
                <Skills></Skills>
            </div>
            <div className="navigation">
                <Navigation></Navigation>
            </div>
            <div className="experiences" id="nav-experiences">
                <Experiences></Experiences>
            </div>
            <div className="blog" id="nav-blog">
                <Blogs></Blogs>
            </div>
        </div>
    );
}

export default App;
