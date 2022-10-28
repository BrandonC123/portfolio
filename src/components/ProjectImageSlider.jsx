import { useEffect, useState } from "react";
import ghHome from "../img/gh-home.png";
import ghProfile from "../img/gh-profile.png";
import todoList from "../img/todo-list.png";
import shoppingCart from "../img/shopping-cart.png";
import memoryCard from "../img/memory-card.png";

const ProjectImageSlider = () => {
    const srcArray = [ghHome, ghProfile, todoList, shoppingCart, memoryCard];
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            cycleImage(true);
        }, 15000);
        return () => clearInterval(interval);
    }, [counter]);
    function cycleImage(add) {
        let tempCounter;
        if (add) {
            if (counter + 1 < srcArray.length) {
                tempCounter = counter + 1;
            } else {
                tempCounter = 0;
            }
            resetImagePosition(counter, tempCounter, true);
        } else {
            if (counter - 1 >= 0) {
                tempCounter = counter - 1;
                setCounter((counter) => counter - 1);
            } else {
                tempCounter = srcArray.length - 1;
            }
            resetImagePosition(counter, tempCounter, false);
        }
        setCounter(tempCounter);
    }
    function resetImagePosition(prevCount, curCount, direction) {
        const images = document.querySelectorAll(".slider-img");
        const prevImg = images[prevCount];
        const curImg = images[curCount];
        let originalPos = -(prevCount * 100);
        const offsetDistance = direction ? 50 : -50;

        prevImg.style.transform = `translateX(${
            originalPos + offsetDistance
        }%)`;
        prevImg.style.opacity = "0";
        curImg.style.opacity = "1";

        setTimeout(() => {
            // Bypass transition time
            prevImg.classList.toggle("slider-img");
            prevImg.style.transform = `translateX(${originalPos}%)`;
            prevImg.classList.toggle("slider-img");
        }, 250);
    }
    function displayImages() {
        return srcArray.map((imgSrc, index) => {
            return (
                <img
                    key={index}
                    src={imgSrc}
                    alt=""
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    className="slider-img"
                />
            );
        });
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
            <div style={{ display: "flex" }}>{displayImages()}</div>
        </div>
    );
};

export default ProjectImageSlider;
