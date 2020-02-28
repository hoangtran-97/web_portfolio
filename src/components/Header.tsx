import React from "react";
import colors from "../constants/colors";

export const Header = () => {
    return (
        <h1
            style={{
                backgroundColor: colors.sub,
                width: "300px",
                padding: "10px",
                margin: "auto",
                textAlign: "center",
                borderRadius: "5px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
            }}
        >
            Hoang Tran <br /> Full-Stack Developer
        </h1>
    );
};
