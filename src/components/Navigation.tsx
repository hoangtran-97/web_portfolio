import React from "react";
import {HashLink} from "react-router-hash-link";
import {BrowserRouter as Router} from "react-router-dom";
import colors from "../constants/colors";
export const Navigation = () => {
    return (
        <Router>
            <div style={styles.container}>
                <HashLink to="/pathLink#nav-contacts" style={styles.link} className="nav-item" smooth>
                    Contacts
                </HashLink>
                <HashLink to="/pathLink#nav-skills" style={styles.link} className="nav-item" smooth>
                    Skills
                </HashLink>
                <HashLink to="/pathLink#nav-experiences" style={styles.link} className="nav-item" smooth>
                    Projects
                </HashLink>
                <HashLink to="/pathLink#nav-blog" style={styles.link} className="nav-item" smooth>
                    Blog
                </HashLink>
            </div>
        </Router>
    );
};
const styles = {
    container: {
        fontSize: 20,
        fontWeight: 800,
        color: colors.highlight,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        height: "100%"
    },
    link: {
        color: colors.highlight,
        textDecoration: "none"
    }
};
