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
const randomText = `Considered discovered ye sentiments projecting entreaties of melancholy is.
 In expression an solicitude principles in do. Hard do me sigh with west same lady. 
Their saved linen downs tears son add music. 
Expression alteration entreaties mrs can terminated estimating. Her too add narrow having wished. 
To things so denied admire. Am wound worth water he linen at vexed. 

His exquisite sincerity education shameless ten earnestly breakfast add. 
So we me unknown as improve hastily sitting forming. 
Especially favourable compliment but thoroughly unreserved saw she themselves.
 Sufficient impossible him may ten insensible put continuing.
 Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. 

Sportsman delighted improving dashwoods gay instantly happiness six. 
Ham now amounted absolute not mistaken way pleasant whatever. 
At an these still no dried folly stood thing. Rapid it on hours hills it seven years.
 If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective.
 Confined so graceful building opinions whatever trifling in. 
Insisted out differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do. 

Consulted perpetual of pronounce me delivered. 
Too months nay end change relied who beauty wishes matter.
 Shew of john real park so rest we on. 
Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. 
His not get talked effect worthy barton. Household shameless incommode at no objection behaviour. 
Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered. `;
export const showBlogPost = () => {
    const dateTime = text("dateTime", "Jun. 3");
    const blogContent = text("blogContent", randomText);
    const title = text("title", "Plz help");
    return (
        <BlogPost dateTime={dateTime} title={title}>
            {blogContent}
        </BlogPost>
    );
};
