import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import colors from "../constants/colors";
import {FiMenu, FiX} from "react-icons/fi";
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

interface MobileMenuIconProps {
    setToggle: (open: boolean) => void;
}
export const Navigation = () => {
    const [open, setToggle] = useState(false);
    const MobileMenuIcon = () => {
        return (
            <div>
                <FiMenu
                    onClick={() => {
                        setToggle(!open);
                    }}
                    style={styles.hamburgerIcon}
                ></FiMenu>
                {open ? <MobileMenu></MobileMenu> : null}
            </div>
        );
    };
    const MobileMenu = () => {
        return (
            <Router>
                <div style={styles.mobileMenuContainer}>
                    <NavigationPaths></NavigationPaths>
                    <FiX
                        onClick={() => {
                            setToggle(false);
                        }}
                        style={styles.hamburgerCloseIcon}
                    ></FiX>
                </div>
            </Router>
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
        top: "50px",
        height: "300px",
        width: "70vw",
        backgroundColor: colors.gray,
        zIndex: 9999,
        paddingLeft: "20px"
    },
    hamburgerIcon: {
        color: colors.highlight,
        height: 25,
        width: 25,
        position: "fixed" as "fixed",
        top: "20px",
        left: "10px",
        zIndex: 9999
    },
    hamburgerCloseIcon: {
        color: colors.highlight,
        height: 25,
        width: 25,
        zIndex: 9999
    }
};
