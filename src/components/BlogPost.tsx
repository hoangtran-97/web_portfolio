import React, {useState} from "react";
import colors from "../constants/colors";
import {animated, useSpring} from "react-spring";
import {FiX} from "react-icons/fi";
interface BlogPostProps {
    children: JSX.Element[] | JSX.Element;
    dateTime: string;
    title: string;
    imageID?: string;
}
export const BlogPost = ({children, dateTime, title, imageID = "WLUHO9A_xik"}: BlogPostProps) => {
    const [open, setToggle] = useState(false);
    const styles = {
        title: {
            color: colors.highlight,
            margin: 0,
            backgroundImage: `url(https://source.unsplash.com/${imageID}/300x300)`,
            backgroundColor: "rgba(68, 62, 62, 0.7)",
            backgroundBlendMode: "color",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "300px",
            height: "300px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column" as "column",
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
    const animation = useSpring({
        width: open ? "900px" : "500px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        backgroundColor: colors.gray,
        color: colors.highlight,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "5px",
        config: {
            duration: open ? 300 : 300
        }
    });
    const childrenAnimation = useSpring({
        width: open ? "600px" : "0px",
        height: "500px",
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
        backgroundImage: `url(https://source.unsplash.com/${imageID}/500x500)`,
        backgroundColor: "rgba(68, 62, 62, 0.7)",
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: open ? "500px" : "500px",
        height: open ? "600px" : "500px",
        borderRadius: "5px",
        padding: "10px",
        display: "flex",
        flexDirection: "column" as "column",
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
        marginBottom: "20px",
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
                <p style={styles.title}>
                    <h6> {dateTime}</h6>
                    <h3>{title}</h3>
                </p>
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
                    <h6> {dateTime}</h6>
                    <h3>{title}</h3>
                </animated.div>
                <animated.div style={childrenAnimation}>{children}</animated.div>
            </animated.div>
        );
    };
    return <>{window.innerWidth > 900 ? <Title></Title> : <MobileTitle></MobileTitle>}</>;
};
