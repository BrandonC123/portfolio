import { useEffect, useState } from "react";
import githubClone from "../img/home.png";
import todoList from "../img/todo-list.png";
import shoppingCart from "../img/shopping-cart.png";

const ProjectImageSlider = () => {
    const srcArray = [githubClone, todoList, shoppingCart];
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            cycleImage(true);
        }, 10000);
        setCurrentImage(srcArray[counter]);
        return () => clearInterval(interval);
    }, [counter]);
    const [currentImage, setCurrentImage] = useState(srcArray[counter]);
    function cycleImage(add) {
        if (add) {
            if (counter + 1 < srcArray.length) {
                setCounter((counter) => counter + 1);
            } else {
                setCounter(0);
            }
        } else {
            if (counter - 1 >= 0) {
                setCounter((counter) => counter - 1);
            } else {
                setCounter(srcArray.length - 1);
            }
        }
    }

    return (
        <div className="project-image-slider">
            <div className="project-cycle">
                <button
                    onClick={() => {
                        cycleImage(false);
                    }}
                    className="image-cycle-btn"
                >
                    {"←"}
                </button>
                <button
                    onClick={() => {
                        cycleImage(true);
                    }}
                    className="image-cycle-btn"
                >
                    {"→"}
                </button>
            </div>
            <img src={currentImage} alt="" />
        </div>
    );
};

export default ProjectImageSlider;
