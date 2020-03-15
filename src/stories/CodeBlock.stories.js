import React from "react";
import {withKnobs, text} from "@storybook/addon-knobs";
import {CodeBlock} from "../components/CodeBlock.tsx";

export default {title: "Show code highlight", component: CodeBlock, decorators: [withKnobs]};
export const showCode = () => {
    const language = text("Language", "javascript");
    const code = text("code", "const testComponent = 5");
    return <CodeBlock language={language}>{code}</CodeBlock>;
};
