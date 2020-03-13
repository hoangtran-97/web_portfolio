import React from "react";
import colors from "../constants/colors";
import {HashLink} from "react-router-hash-link";
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
            <HashLink to="/pathLink#nav-blog" style={styles.link} className="nav-item" smooth>
                Blog
            </HashLink>
        </>
    );
};
const styles = {
    link: {
        color: colors.highlight,
        textDecoration: "none"
    }
};
