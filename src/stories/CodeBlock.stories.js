import React from "react";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import {CodeBlock} from "../components/CodeBlock.tsx";

export default {title: "Show code highlight", component: CodeBlock, decorators: [withKnobs]};
export const showCode = () => {
    const language = text("Language", "javascript");
    const code = text("code", "const testComponent = 5");
    return <CodeBlock language={language}>{code}</CodeBlock>;
};
export const asDynamicVariables = () => {
    const name = text("Name", "James");
    const age = number("Age", 35);
    const content = `I am ${name} and I'm ${age} years old.`;

    return <div>{content}</div>;
};
