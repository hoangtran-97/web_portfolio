import React from "react";
import colors from "../constants/colors";
import {HashLink} from "react-router-hash-link";
import {Switch, Route, Link} from "react-router-dom";
import {Blogs} from "./Blogs";
export const NavigationPaths = () => {
    return (
        <>
            <HashLink to="/pathLink#nav-contacts" style={styles.link} className="nav-item" smooth>
                Contacts
            </HashLink>
            <HashLink to="/pathLink#nav-skills" style={styles.link} className="nav-item" smooth>
                Skills
            </HashLink>
            <HashLink to="/pathLink#nav-experiences" style={styles.link} className="nav-item" smooth>
                Projects
            </HashLink>
            <Link to="/blogs" style={styles.link} className="nav-item">
                Blog
            </Link>
        </>
    );
};
const styles = {
    link: {
        color: colors.highlight,
        textDecoration: "none"
    }
};
