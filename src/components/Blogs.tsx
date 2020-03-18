import React from "react";
import colors from "../constants/colors";
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {BlogPost} from "./BlogPost";
export const Blogs = () => {
    return (
        <>
            <Link to="/" className="nav-item" style={styles.link}>
                <FiArrowLeft style={styles.icon}></FiArrowLeft> Back
            </Link>
            <h2 style={styles.header}>Blog Entries</h2>
            <p style={styles.header}>Content Comming Soon!</p>
            <div className="blogs-list">
                <BlogPost title="My first Blog Post" dateTime="Mar 17, 2020">
                    <p>So this is my first blog post</p>
                </BlogPost>
                <BlogPost title="My first Blog Post" dateTime="Mar 17, 2020">
                    <p>So this is my first blog post</p>
                </BlogPost>
                <BlogPost title="My first Blog Post" dateTime="Mar 17, 2020">
                    <p>So this is my first blog post</p>
                </BlogPost>
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
    }
};
