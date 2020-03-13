import React from "react";
import colors from "../constants/colors";

export const Blogs = () => {
    return (
        <>
            <h2 style={styles.content}>Blog Entries</h2>
            <p style={styles.content}>Content Comming Soon!</p>
        </>
    );
};
const styles = {
    header: {color: colors.highlight, textAlign: "center" as "center"},
    content: {color: colors.highlight}
};
