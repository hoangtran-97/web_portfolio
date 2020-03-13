import React from "react";
import colors from "../constants/colors";
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
export const Blogs = () => {
    return (
        <>
            <Link to="/pathLink" className="nav-item" style={styles.link}>
                <FiArrowLeft style={styles.icon}></FiArrowLeft> Back
            </Link>
            <h2 style={styles.header}>Blog Entries</h2>
            <p style={styles.header}>Content Comming Soon!</p>
        </>
    );
};
const styles = {
    header: {color: colors.highlight, textAlign: "center" as "center"},
    content: {color: colors.highlight},
    link: {
        fontSize: 20,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color: colors.highlight,
        textDecoration: "none"
    },
    icon: {
        width: 20,
        height: 20
    }
};
