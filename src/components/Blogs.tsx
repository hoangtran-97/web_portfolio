import React from "react";
import colors from "../constants/colors";

export const Blogs = () => {
    return (
        <>
            <h2 style={styles.header}>Blog Entries</h2>
            <p style={styles.header}>Content Comming Soon!</p>
        </>
    );
};
const styles = {
    header: {color: colors.highlight, textAlign: "center" as "center"}
};
