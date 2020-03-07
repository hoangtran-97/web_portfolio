import React from "react";
import colors from "../constants/colors";

export const Header = () => {
    return (
        <h1 style={styles.header}>
            Hoang Tran <br /> Full-Stack Developer
        </h1>
    );
};
const styles = {
    header: {
        backgroundColor: colors.gray,
        color: colors.highlight,
        width: "300px",
        padding: "10px",
        margin: "auto",
        textAlign: "center" as "center",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    }
};
