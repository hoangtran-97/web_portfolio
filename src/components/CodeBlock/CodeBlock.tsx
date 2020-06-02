import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
import "./style.css";

interface CodeBlockProps {
    children: JSX.Element[] | JSX.Element;
    language: string;
}

export const CodeBlock = ({children, language}: CodeBlockProps) => {
    return (
        <div className="code_container">
            <SyntaxHighlighter language={language} style={okaidia}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
};
