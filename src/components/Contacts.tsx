import React from "react";
import {FiMail, FiGithub, FiFacebook, FiLinkedin, FiPhoneCall} from "react-icons/fi";
import colors from "../constants/colors";
export const Contacts = () => {
    return (
        <div style={styles.container}>
            <a href="mailto:hoangtranxamk@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                <FiMail style={styles.icon} />
                hoangtranxamk@gmail.com
            </a>
            <a href="https://github.com/hoangtran-97" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                <FiGithub style={styles.icon} />
                GitHub
            </a>
            <a
                href="https://www.facebook.com/vuHoangTran97"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <FiFacebook style={styles.icon} />
                Facebook
            </a>
            <a
                href="https://www.linkedin.com/in/hoangtranxamk/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <FiLinkedin style={styles.icon} />
                LinkedIn
            </a>
            <a href="tel:+358 46 845 2553" style={styles.anchor}>
                <FiPhoneCall style={styles.icon} />
                +358 46 845 2553
            </a>
        </div>
    );
};
const styles = {
    anchor: {
        display: "flex",
        alignItems: "center",
        color: colors.highlight
    },
    icon: {
        width: 20,
        height: 20,
        margin: "5px",
        color: colors.highlight
    },
    container: {
        height: "100px",
        // backgroundColor: colors.sub,
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        backgroundImage: "url(https://source.unsplash.com/1920x1080/?linkedin)",
        backgroundColor: "rgba(68, 62, 62, 0.7)",
        backgroundBlendMode: "color",
        backgroundSize: "cover"
    }
};
