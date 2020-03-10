import React from "react";

export const Skills = () => {
    return (
        <div style={styles.container}>
            React, React Native, JavaScript, TypeScript, Redux, REST API, Webpack, Jest, SASS, MongoDB, Node, Express.
        </div>
    );
};
const styles = {
    container: {
        fontWeight: 700,
        fontSize: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundImage: "url(https://source.unsplash.com/700x200/?web)",
        color: "white",
        backgroundColor: "rgba(68, 62, 62, 0.7)",
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
};
