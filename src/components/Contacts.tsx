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
        // display: "flex",
        // alignItems: "center",
        // color: colors.text
    },
    icon: {
        // width: 50,
        // height: 50,
        // margin: 20,
        // color: colors.text
    },
    container: {
        // backgroundColor: colors.sub,
        // display: "flex",
        // flexDirection: "row" as "row",
        // justifyContent: "center",
        // alignItems: "center",
        // borderRadius: "10px",
        // padding: "20px",
        // marginBottom: "20px",
        // boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    }
};
