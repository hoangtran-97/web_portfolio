import React from "react";
import colors from "../constants/colors";
import {FiZap, FiGithub} from "react-icons/fi";

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
            <div style={styles.buttonContainer} className="button-container">
                {hasGit ? (
                    <button
                        style={styles.button}
                        type="button"
                        onClick={() => window.open(gitLink, "_blank")}
                        className="hvr-underline-from-center"
                    >
                        GitHub <FiGithub style={styles.icon}></FiGithub>
                    </button>
                ) : null}
                {hasDemo ? (
                    <button
                        style={styles.button}
                        type="button"
                        onClick={() => window.open(demoLink, "_blank")}
                        className="hvr-underline-from-center"
                    >
                        Live Demo <FiZap style={styles.icon}></FiZap>
                    </button>
                ) : null}
            </div>
        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "flex-start",
        backgroundColor: colors.gray,
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        color: colors.highlight,
        fontSize: 14
    },
    button: {
        height: "40px",
        color: colors.text,
        fontSize: 14,
        backgroundColor: colors.highlight,
        padding: "10px",
        borderRadius: "5px",
        marginRight: "10px",
        marginBottom: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    },
    icon: {
        width: 10,
        height: 10,
        color: colors.text
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        flex: 1,
        alignItems: "flex-end"
    }
};
