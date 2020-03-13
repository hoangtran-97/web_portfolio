import React from "react";
import "./css/App.css";
import {Header} from "./components/Header";
import {Contacts} from "./components/Contacts";
import {Experiences} from "./components/Experiences";
import {Skills} from "./components/Skills";
import {Navigation} from "./components/Navigation";
import {Blogs} from "./components/Blogs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/blogs">
                        <Blogs></Blogs>
                    </Route>
                    <Route path="/pathLink">
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
                                <Navigation></Navigation>>
                            </div>
                            <div className="experiences" id="nav-experiences">
                                <Experiences></Experiences>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
