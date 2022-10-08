import { useEffect, useState } from "react";
import githubClone from "./img/home.png";
import todoList from "./img/todo-list.png";

const ProjectImageSlider = () => {
    const srcArray = [githubClone, todoList];
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        setImgSrc(srcArray[1]);
    }, []);
    return (
        <div className="project-image-slider">
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default ProjectImageSlider;
