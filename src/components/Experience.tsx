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
    colorCode?: string;
    children: JSX.Element[] | JSX.Element;
}
export const Experience = ({title, hasGit, hasDemo, gitLink, demoLink, startDate, endDate, projectType, colorCode, children}: ExperienceProps) => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column" as "column",
            justifyContent: "flex-start",
            backgroundColor: colors.gray,
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            color: "#D4D4C5",
            fontSize: 14,
            borderTop: colorCode ? `6px solid ${colorCode}` : `6px solid #D4D4C5`
        },
        button: {
            height: "40px",
            color: colors.text,
            fontSize: 14,
            backgroundColor: "hsla(0, 0%, 100%, 0.76)",
            padding: "10px",
            borderRadius: "5px",
            marginRight: "10px",
            marginBottom: "10px",
            boxShadow: "0 4px 6px 0 hsla(0,0%,0%,0.2)"
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
        },
        header: {
            color: colors.highlight,
            marginBottom: "30px"
        }
    };
    return (
        <div style={styles.container} className="card">
            <h2 style={styles.header}>
                {title}: {startDate} {endDate && "-"} {endDate}
            </h2>
            <h5>{projectType}</h5>
            {children}
            <div style={styles.buttonContainer} className="button-container">
                {hasGit && (
                    <button style={styles.button} type="button" onClick={() => window.open(gitLink, "_blank")} className="hvr-underline-from-center">
                        GitHub <FiGithub style={styles.icon}></FiGithub>
                    </button>
                )}
                {hasDemo && (
                    <button style={styles.button} type="button" onClick={() => window.open(demoLink, "_blank")} className="hvr-underline-from-center">
                        Live Demo <FiZap style={styles.icon}></FiZap>
                    </button>
                )}
            </div>
        </div>
    );
};
