import html from "../img/tech-icons/html.png";
import css from "../img/tech-icons/css.png";
import javascript from "../img/tech-icons/javascript.png";
import react from "../img/tech-icons/react.png";
import firebase from "../img/tech-icons/firebase.png";
import { useEffect } from "react";

const TechnologyStack = ({ stack }) => {
    // Only show icons on big screen, text otherwise
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
            if (window.innerWidth >= 650) {
                return (
                    <img
                        style={{ maxWidth: "60px" }}
                        src={srcArray[index].icon}
                        alt=""
                    />
                );
            } else {
                return <div>{srcArray[index].name}</div>;
            }
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
