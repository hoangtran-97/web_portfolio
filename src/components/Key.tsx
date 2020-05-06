import React from "react";
import colors from "../constants/colors";

export const Key = () => {
    return (
        <div style={styles.container}>
            <div style={styles.keyContainer}>
                <div style={styles.keyProfessional} className="key-item"></div>
                <p>Professional work.</p>
            </div>
            <div style={styles.keyContainer}>
                <div style={styles.keyPersonal} className="key-item"></div>
                <p>Personal project.</p>
            </div>
            <div style={styles.keyContainer}>
                <div style={styles.keyOffline} className="key-item"></div>
                <p>Personal project - no demo available yet.</p>
            </div>
            <div style={styles.keyContainer}>
                <div style={styles.keyWip} className="key-item"></div>
                <p>Work in progress.</p>
            </div>
        </div>
    );
};
const styles = {
    container: {
        color: colors.highlight,
        display: "flex",
        margin: "auto",
        flexDirection: "column" as "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "300px",
        height: "200px",
        fontSize: "14px"
    },
    keyProfessional: {
        backgroundColor: colors.professional
    },
    keyPersonal: {
        backgroundColor: colors.personal
    },
    keyOffline: {
        backgroundColor: colors.offline
    },
    keyWip: {
        backgroundColor: colors.wip
    },
    keyContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "center",
        alignItems: "center"
    }
};
