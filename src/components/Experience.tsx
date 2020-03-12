import React from "react";
import colors from "../constants/colors";

interface ExperienceProps {
    title: string;
    hasGit?: boolean;
    hasDemo?: boolean;
    gitLink?: string;
    demoLink?: string;
    startDate: string;
    endDate?: string;
    projectType: string;
    children: JSX.Element[] | JSX.Element;
}
export const Experience = ({
    title,
    hasGit,
    hasDemo,
    gitLink,
    demoLink,
    startDate,
    endDate,
    projectType,
    children
}: ExperienceProps) => {
    return (
        <div style={styles.container} className="card">
            <h2>
                {title}: {startDate} {endDate ? "-" : null} {endDate}
            </h2>
            <h5>{projectType}</h5>
            {children}
            {hasGit ? (
                <button style={styles.button} type="button" onClick={() => window.open(gitLink, "_blank")}>
                    GitHub
                </button>
            ) : null}
            {hasDemo ? (
                <button style={styles.button} type="button" onClick={() => window.open(demoLink, "_blank")}>
                    Live Demo
                </button>
            ) : null}
        </div>
    );
};
const styles = {
    container: {
        display: "inline-block",
        backgroundColor: colors.gray,
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        color: colors.highlight,
        fontSize: 14
    },
    button: {
        fontSize: 14,
        backgroundColor: colors.highlight,
        padding: "10px",
        borderRadius: "10px",
        marginRight: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    }
};
