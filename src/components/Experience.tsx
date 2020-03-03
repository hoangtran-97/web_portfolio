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
        <div style={styles.container}>
            <h4>
                {title}: {startDate} {endDate ? "-" : null} {endDate}
            </h4>
            <h5>{projectType}</h5>
            {children}
            {hasGit ? (
                <button type="button" onClick={() => window.open(gitLink, "_blank")}>
                    GitHub
                </button>
            ) : null}
            {hasDemo ? (
                <button type="button" onClick={() => window.open(demoLink, "_blank")}>
                    Live Demo
                </button>
            ) : null}
        </div>
    );
};
const styles = {
    container: {
        backgroundColor: colors.sub,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    }
};
