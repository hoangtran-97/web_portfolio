import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import colors from "../constants/colors";
import {FiMenu} from "react-icons/fi";
import {NavigationPaths} from "./NavigationPaths";

const Menu = () => {
    return (
        <Router>
            <div style={styles.container}>
                <NavigationPaths></NavigationPaths>
            </div>
        </Router>
    );
};
const MobileMenu = () => {
    return (
        <Router>
            <div style={styles.container}>
                <NavigationPaths></NavigationPaths>
            </div>
        </Router>
    );
};
export const Navigation = () => {
    const [open, setToggle] = useState(false);
    const MobileMenuIcon = () => {
        return (
            <FiMenu
                onClick={() => {
                    setToggle(!open);
                    console.log(open);
                }}
                style={styles.icon}
            ></FiMenu>
        );
    };
    return (
        <>
            {window.innerWidth > 900 ? <Menu></Menu> : <MobileMenuIcon></MobileMenuIcon>}
            {open ? <MobileMenu></MobileMenu> : null}
        </>
    );
};
const styles = {
    container: {
        fontSize: 20,
        fontWeight: 800,
        color: colors.highlight,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        height: "100%"
    },
    icon: {
        color: colors.highlight,
        height: 25,
        width: 25
    },
    menu: {
        color: colors.highlight
    }
};
