import React from "react";
import "./style.css";

const skills = ["React", "React Native", "JavaScript", "TypeScript", "Redux", "REST API", "Webpack", "Jest", "SASS", "MongoDB", "Node", "Express"];

interface SkillProps {
    skill: string;
}
const Skill = ({skill}: SkillProps) => <div className="skill_container">{skill}</div>;
export const Skills = () => {
    return (
        <div className="skills_container">
            //I Know this is an anti-pattern but in this case since the data is static it is safe
            {skills.map((skill, index) => (
                <Skill skill={skill} key={index} />
            ))}
        </div>
    );
};
