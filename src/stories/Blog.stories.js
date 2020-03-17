import React from "react";
import {withKnobs, text} from "@storybook/addon-knobs";
import {CodeBlock} from "../components/CodeBlock.tsx";
import {BlogPost} from "../components/BlogPost.tsx";

export default {title: "Blog Component", component: CodeBlock, decorators: [withKnobs]};
export const showCode = () => {
    const language = text("language", "javascript");
    const code = text("code", "const testComponent = 5");
    return <CodeBlock language={language}>{code}</CodeBlock>;
};
export const showBlogPost = () => {
    const dateTime = text("dateTime", "Jun. 3");
    const blogContent = text("blogContent", "I need a jub");
    const title = text("title", "Plz help");
    return (
        <BlogPost dateTime={dateTime} title={title}>
            {blogContent}
        </BlogPost>
    );
};
