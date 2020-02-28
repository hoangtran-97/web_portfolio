import React from "react";

interface ExperienceProps {
    title: string;
    hasGit?: boolean;
    hasDemo?: boolean;
    gitLink?: string;
    demoLink?: string;
    startDate: string;
    endDate?: string;
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
    children
}: ExperienceProps) => {
    return (
        <>
            <h4>
                {title}: {startDate} - {endDate}
            </h4>
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
        </>
    );
};
