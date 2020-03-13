import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import colors from "../constants/colors";
import {FiMenu} from "react-icons/fi";
import {NavigationPaths} from "./NavigationPaths";

const Menu = () => {
    return (
        <Router>
            <div style={styles.menuContainer}>
                <NavigationPaths></NavigationPaths>
            </div>
        </Router>
    );
};
const MobileMenu = () => {
    return (
        <Router>
            <div style={styles.mobileMenuContainer}>
                <NavigationPaths></NavigationPaths>
            </div>
        </Router>
    );
};
export const Navigation = () => {
    const [open, setToggle] = useState(false);
    const MobileMenuIcon = () => {
        return (
            <div>
                <FiMenu
                    onClick={() => {
                        setToggle(!open);
                        setTimeout(() => setToggle(false), 3000);
                        console.log(open);
                    }}
                    style={styles.hamburgerIcon}
                ></FiMenu>
                {open ? <MobileMenu></MobileMenu> : null}
            </div>
        );
    };
    return <>{window.innerWidth > 900 ? <Menu></Menu> : <MobileMenuIcon></MobileMenuIcon>}</>;
};
const styles = {
    menuContainer: {
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
    mobileMenuContainer: {
        fontSize: 20,
        fontWeight: 800,
        color: colors.highlight,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        borderRadius: "5px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        position: "fixed" as "fixed",
        height: "200px",
        width: "70vw",
        backgroundColor: "rgba(68, 62, 62, 0.7)",
        zIndex: 9999,
        paddingLeft: "20px"
    },
    icon: {
        color: colors.highlight,
        height: 25,
        width: 25
    },
    hamburgerIcon: {
        color: colors.highlight,
        height: 25,
        width: 25,
        position: "fixed" as "fixed",
        top: "20px",
        left: "10px"
    },
    menu: {
        color: colors.highlight
    },
    test: {
        backgroundColor: colors.highlight,
        position: "fixed" as "fixed"
    }
};
