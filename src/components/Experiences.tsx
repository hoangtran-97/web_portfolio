import React from "react";
import {Experience} from "./Experience";
enum projectTypes {
    gmo = "GMO-Z RUNSYSTEM - React Native Developer",
    personal = "Personal project",
    wip = "Personal project, work-in-progress",
    offline = "Personal project, planned to deploy live version"
}
export const Experiences = () => {
    return (
        <>
            <Experience title="DMS" startDate="Jul. 2019" endDate="Oct. 2019" projectType={projectTypes.gmo}>
                <p>React Native application for Kangaroo client.</p>
                <ul>
                    <li>
                        Worked as a solo developer to create React Native application and communicate with back-end team
                        to implements APIs.
                    </li>
                    <li>Communicated with the client directly, prototyped, design and programmed the product.</li>
                    <li>
                        Learnt React and React Native ecosystem, along with agile and continuous delivery software
                        development methodology.
                    </li>
                </ul>
                <p>Technologies: React Native, Redux, Realm, Google Map, REST API</p>
            </Experience>
            <Experience title="JACCS" startDate="Apr. 2019" endDate="Jun. 2019" projectType={projectTypes.gmo}>
                <p>React Native application for JACCS client.</p>
                <ul>
                    <li>Worked in a team of 5 developers. Deliver the product in 3 weeks.</li>
                    <li>
                        Implement features such as receiving notifications, loading screen, loading animations, querry
                        sorting.
                    </li>
                    <li>Contributed to features suggestion and bug fixing.</li>
                </ul>
                <p>Technologies: React Native, Redux, Realm, Google Map, REST API</p>
            </Experience>
            <Experience title="Yakult" startDate="Jun. 2019" projectType={projectTypes.gmo}>
                <p>React Native application for Yakult client.</p>
                <ul>
                    <li>Worked in a team of 5 developers. Deliver the product in 3 weeks.</li>
                    <li>
                        Implement features such as receiving notifications, loading screen, animations, map tracking.
                    </li>
                    <li>Contributed to features suggestion and bug fixing.</li>
                </ul>
                <p>Technologies: React Native, Redux, Realm, Google Map, REST API</p>
            </Experience>
            <Experience
                title="Porfolio"
                startDate="Feb. 2020"
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_portfolio"
            >
                <p>Website - this site</p>
                <ul>
                    <li>Written with React and Typescript.</li>
                    <li>Designed to be as minimal as possible.</li>
                    <li>Animated with React Spring.</li>
                    <li>Component designed with Storybook implementation.</li>
                </ul>
                <p>Technologies: HTML, CSS, React, React-router, Typescript, React Srping, Storybook</p>
            </Experience>
            <Experience
                title="Weather Journal"
                startDate="Jan. 2020"
                hasDemo
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_weatherJournal"
                demoLink="https://hoangtranxamk-weather-journal.herokuapp.com/"
            >
                <p>Website</p>
                <ul>
                    <li>Gather weather data based on zipcodes with Openweathermap API. </li>
                    <li>Animated weather and changed dynamically based on current weather.</li>
                </ul>
                <p>Technologies: HTML, CSS, Express, Node, REST API</p>
            </Experience>
            <Experience
                title="Moments"
                startDate="Jul. 2019"
                projectType={projectTypes.personal}
                hasGit
                gitLink="https://github.com/hoangtran-97/RN_Moments"
            >
                <p>React Native application</p>
                <ul>
                    <li>Created application for taking photos with horizontal gallery and progression bar.</li>
                    <li>Implemented Firebase for remote photo upload.</li>
                </ul>
                <p>Technologies: React Native, Redux, Firebase</p>
            </Experience>
            <Experience
                title="Travel Planner"
                startDate="Dec. 2019"
                hasDemo
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_travelPlanner"
                demoLink="https://hoangtranxamk-travel-planner.herokuapp.com/"
            >
                <p>Website</p>
                <ul>
                    <li>Deliver information based on 3 public APIs: Geonames, Darksky, Pixabay.</li>
                    <li>Designed UI with animated weather forecasts and dynamic colors based on content.</li>
                    <li>Unit Testing with Jest.</li>
                </ul>
                <p>Technologies:Express, Webpack, Jest,Service worker</p>
            </Experience>
            <Experience
                title="Out Of The Blue"
                startDate="Dec. 2019"
                hasDemo
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_landingPage"
                demoLink="https://hoangtranxamk-landing-page.netlify.com/"
            >
                <p>Website - mockup</p>
                <ul>
                    <li>Designed with dynamic tab navigation.</li>
                    <li>Responsive using CSS Grid.</li>
                    <li>Design based on Material UI.</li>
                </ul>
                <p>Technologies: HTML, CSS, JavaScript</p>
            </Experience>
            <Experience
                title="Blog"
                startDate="Dec. 2019"
                hasDemo
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_blog_html_css"
                demoLink="https://hoangtranxamk-blog-html-css.netlify.com"
            >
                <p>Website - mockup</p>
                <ul>
                    <li>Responsive using CSS Grid.</li>
                    <li>Design based on Material UI.</li>
                </ul>
                <p>Technologies: HTML, CSS, CSS Grid</p>
            </Experience>

            <Experience
                title="Job board"
                startDate="Dec. 2019"
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_JobBoard"
            >
                <p>Website</p>
                <ul>
                    <li>Junior job board with github API.</li>
                    <li>Background cron jobs to fetch and filter result.</li>
                </ul>
                <p>Technologies: HTML, CSS, Express, Node, REST API</p>
            </Experience>
            <Experience
                title="Random password generator"
                startDate="Dec. 2019"
                hasGit
                hasDemo
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_passwordGenerator"
                demoLink="https://hoangtranxamk-passwordgenerator.netlify.com/"
            >
                <p>Website</p>
                <ul>
                    <li>Generate random password from 1 to 50 characters.</li>
                    <li>Can include numbers, uppercase letters, symbols</li>
                </ul>
                <p>Technologies: HTML, CSS, JavaScript</p>
            </Experience>
            <Experience
                title="A piano for when you are bored"
                startDate="Dec. 2019"
                hasGit
                hasDemo
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_piano"
                demoLink="https://hoangtranxamk-piano.netlify.com/"
            >
                <p>Website</p>
                <ul>
                    <li>You can play the piano.</li>
                </ul>
                <p>Technologies: HTML, CSS, JavaScript</p>
            </Experience>
            <Experience
                title="Expense Tracker"
                startDate="Feb. 2020"
                hasGit
                projectType={projectTypes.wip}
                gitLink="https://github.com/hoangtran-97/web_expenseTracker"
            >
                <p>Website</p>
                <ul>
                    <li>Written with React</li>
                    <li>Backend with MongoDB server to store Data</li>
                    <li>Context API for component data access.</li>
                </ul>
                <p>Technologies: React, Context API, MongoDb</p>
            </Experience>
            <Experience
                title="Natural Language Processing"
                startDate="Dec. 2019"
                hasGit
                projectType={projectTypes.personal}
                gitLink="https://github.com/hoangtran-97/web_natualLanguageProcessing"
            >
                <p>Website</p>
                <ul>
                    <li>A small web to test with https://aylien.com/ API, especially the sentiment API.</li>
                    <li>Unit testing with Jest.</li>
                    <li>Service worker for offline caching.</li>
                </ul>
                <p>Technologies: JavaScript, Express, Jest, Service worker</p>
            </Experience>
        </>
    );
};
