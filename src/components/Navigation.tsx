import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import {BrowserRouter as Router} from "react-router-dom";
import colors from "../constants/colors";
export const Navigation = () => {
    return (
        <Router>
            <div style={styles.container}>
                <Link to="/pathLink#nav-contacts" style={styles.link}>
                    Contacts
                </Link>
                <Link to="/pathLink#nav-skills" style={styles.link}>
                    Skills
                </Link>
                <Link to="/pathLink#nav-experiences" style={styles.link}>
                    Projects
                </Link>
            </div>
        </Router>
    );
};
const styles = {
    container: {
        fontSize: 18,
        fontWeight: 700,
        backgroundColor: colors.gray,
        color: colors.highlight,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px"
    },
    link: {
        color: colors.highlight,
        textDecoration: "none"
    }
};
