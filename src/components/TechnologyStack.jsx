import html from "../img/tech-icons/html.png";
import css from "../img/tech-icons/css.png";
import javascript from "../img/tech-icons/javascript.png";
import react from "../img/tech-icons/react.png";
import firebase from "../img/tech-icons/firebase.png";
import { useEffect, useState } from "react";

const TechnologyStack = ({ stack }) => {
    const srcArray = [
        { icon: html, name: "HTML" },
        { icon: css, name: "CSS" },
        { icon: react, name: "React" },
        { icon: javascript, name: "JavaScript" },
        { icon: firebase, name: "Firebase" },
    ];
    function displayIcons() {
        return stack.map((item) => {
            const index = srcArray
                .map(({ name }) => name.toLowerCase())
                .indexOf(item.toLowerCase());
            return (
                <img
                    key={item}
                    style={{ maxWidth: "45px" }}
                    src={srcArray[index].icon}
                    alt=""
                />
            );
        });
    }
    return (
        <div>
            Technologies:
            <div className="tech-stack-container">{displayIcons()}</div>
        </div>
    );
};

export default TechnologyStack;
