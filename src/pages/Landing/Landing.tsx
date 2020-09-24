import React from "react";
import "./style.css";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Contacts} from "../../components/Contacts/Contacts";
import {Experiences} from "../../components/Experiences/Experiences";
import {Skills} from "../../components/Skills/Skills";
import {Navigation} from "../../components/Navigation/Navigation";
// import {Blogs} from "../Blogs/Blogs";
import {Key} from "../../components/Key/Key";

function Landing() {
    return (
        <>
            <Router>
                <Switch>
                    {/* <Route path="/blogs">
                        <Blogs />
                    </Route> */}
                    <Route path="/">
                        <div className="container">
                            <section className="header">
                                <Header />
                            </section>
                            <section className="contacts" id="nav-contacts">
                                <Contacts />
                            </section>
                            <section className="skills" id="nav-skills">
                                <Skills />
                            </section>
                            <section className="navigation">
                                <Navigation />
                            </section>
                            <section className="key">
                                <Key />
                            </section>
                            <section className="experiences" id="nav-experiences">
                                <Experiences />
                            </section>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Landing;
