import React, {useState} from "react";
import colors from "../constants/colors";
import {FiMenu, FiX} from "react-icons/fi";
import {NavigationPaths} from "./NavigationPaths";
import {animated, useSpring} from "react-spring";

const Menu = () => {
    return (
        <div style={styles.menuContainer}>
            <NavigationPaths></NavigationPaths>
        </div>
    );
};

interface MobileMenuIconProps {
    setToggle: (open: boolean) => void;
}
export const Navigation = () => {
    const [open, setToggle] = useState(false);
    const animation = useSpring({
        height: open ? "300px" : "0px",
        opacity: open ? 1 : 0,
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
        width: "70vw",
        backgroundColor: colors.gray,
        zIndex: 9999,
        paddingLeft: "20px",
        pointerEvents: open ? "auto" : "none",
        config: {
            duration: open ? 300 : 250
        }
    });

    const MobileMenuIcon = () => {
        return (
            <div>
                <FiMenu
                    onClick={() => {
                        setToggle(!open);
                    }}
                    style={styles.hamburgerIcon}
                ></FiMenu>
                <MobileMenu></MobileMenu>
            </div>
        );
    };
    const MobileMenu = () => {
        return (
            <animated.div style={animation}>
                <NavigationPaths></NavigationPaths>
                <FiX
                    onClick={() => {
                        setToggle(false);
                    }}
                    style={styles.hamburgerCloseIcon}
                ></FiX>
            </animated.div>
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
