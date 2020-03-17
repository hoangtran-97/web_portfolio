import React from "react";
import colors from "../constants/colors";
interface BlogPostProps {
    children: JSX.Element[] | JSX.Element;
    dateTime: string;
    title: string;
}
export const BlogPost = ({children, dateTime, title}: BlogPostProps) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>
                {dateTime}
                <br />
                {title}
            </h3>
            {children}
        </div>
    );
};
const styles = {
    container: {
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        backgroundColor: colors.gray,
        color: colors.highlight,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "5px"
    },
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
        alignItems: "center",
        marginRight: "10px"
    }
};
