import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/esm/styles/prism";
interface CodeBlockProps {
    children: JSX.Element[] | JSX.Element;
}

export const CodeBlock = ({children}: CodeBlockProps) => {
    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {children}
            <p>'(num) => num + 1';</p>
        </SyntaxHighlighter>
    );
};
