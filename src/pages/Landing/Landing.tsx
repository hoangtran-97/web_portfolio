import React from "react";
import "./style.css";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Contacts} from "../../components/Contacts/Contacts";
import {Experiences} from "../../components/Experiences/Experiences";
import {Skills} from "../../components/Skills/Skills";
import {Navigation} from "../../components/Navigation/Navigation";
import {Blogs} from "../Blogs/Blogs";
import {Key} from "../../components/Key/Key";

function Landing() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/">
                        <div className="container">
                            <div className="header">
                                <Header />
                            </div>
                            <div className="contacts" id="nav-contacts">
                                <Contacts />
                            </div>
                            <div className="skills" id="nav-skills">
                                <Skills />
                            </div>
                            <div className="navigation">
                                <Navigation />>
                            </div>
                            <div className="key">
                                <Key />
                            </div>
                            <div className="experiences" id="nav-experiences">
                                <Experiences />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Landing;