import React from "react";
import colors from "../constants/colors";
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {Mar182020} from "./BlogEntries/Mar182020";

export const Blogs = () => {
    return (
        <>
            <Link to="/" className="nav-item" style={styles.link}>
                <FiArrowLeft style={styles.icon}></FiArrowLeft> Back
            </Link>
            <h2 style={styles.header}>Blog Entries</h2>
            <p style={styles.banner}>My journey, my findings, my interests.</p>
            <div className="blogs-list">
                <Mar182020></Mar182020>
            </div>
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
    },
    banner: {
        fontStyle: "italic",
        textAlign: "center" as "center",
        color: colors.highlight
    }
};
