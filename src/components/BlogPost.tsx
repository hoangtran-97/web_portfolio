import React, {useState} from "react";
import colors from "../constants/colors";
import {animated, useSpring} from "react-spring";
import {FiX} from "react-icons/fi";
interface BlogPostProps {
    children: JSX.Element[] | JSX.Element;
    dateTime: string;
    title: string;
}
export const BlogPost = ({children, dateTime, title}: BlogPostProps) => {
    const [open, setToggle] = useState(false);
    const animation = useSpring({
        width: open ? "900px" : "300px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        backgroundColor: colors.gray,
        color: colors.highlight,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "5px",
        paddingBottom: open ? "10px" : "0px",
        config: {
            duration: open ? 300 : 300
        }
    });
    const childrenAnimation = useSpring({
        width: open ? "600px" : "0px",
        height: "300px",
        padding: open ? "50px" : "0px",
        overflow: "scroll",
        opacity: open ? 1 : 0,
        config: {
            duration: open ? 400 : 200
        }
    });
    const titleAnimation = useSpring({
        color: colors.highlight,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: open ? "50px" : "0px",
        backgroundImage: "url(https://source.unsplash.com/900x400/?linkedin)",
        backgroundColor: "rgba(68, 62, 62, 0.7)",
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: open ? "200px" : "300px",
        height: open ? "200px" : "300px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });
    const mobileAnimation = useSpring({
        height: open ? "900px" : "300px",
        width: "300px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        backgroundColor: colors.gray,
        color: colors.highlight,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "5px",
        config: {
            duration: open ? 300 : 300
        }
    });
    const mobileChildrenAnimation = useSpring({
        padding: open ? "20px" : "0px",
        height: open ? "600px" : "0px",
        overflow: "scroll",
        opacity: open ? 1 : 0,
        config: {
            duration: open ? 400 : 200
        }
    });
    const MobileTitle = () => {
        return (
            <animated.div
                style={mobileAnimation}
                onClick={() => {
                    setToggle(!open);
                }}
            >
                <h3 style={styles.title}>
                    {dateTime}
                    <br />
                    {title}
                </h3>
                <animated.div style={mobileChildrenAnimation}>
                    {children}
                    <br />
                    <FiX
                        onClick={() => {
                            setToggle(false);
                        }}
                        style={styles.closeIcon}
                    ></FiX>
                </animated.div>
            </animated.div>
        );
    };
    const Title = () => {
        return (
            <animated.div
                style={animation}
                onClick={() => {
                    setToggle(!open);
                }}
            >
                <animated.div style={titleAnimation}>
                    {dateTime}
                    <br />
                    {title}
                </animated.div>
                <animated.div style={childrenAnimation}>{children}</animated.div>
            </animated.div>
        );
    };
    return <>{window.innerWidth > 900 ? <Title></Title> : <MobileTitle></MobileTitle>}</>;
};
const styles = {
    title: {
        color: colors.highlight,
        margin: 0,
        backgroundImage: "url(https://source.unsplash.com/900x400/?linkedin)",
        backgroundColor: "rgba(68, 62, 62, 0.7)",
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "300px",
        height: "300px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    closeIcon: {
        margin: "10px",
        width: 30,
        height: 30,
        color: colors.gray,
        backgroundColor: colors.highlight,
        borderRadius: "50px"
    }
};
